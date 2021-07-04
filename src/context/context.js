import React, { useContext, useState } from "react";
import mockUsers from "./mockData/mockUsers";
import mockRepos from "./mockData/mockRepos";
require("dotenv").config();

const ROOT_URL = "https://api.github.com";
const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

//access to Provider:
const GithubContext = React.createContext();

//return the context provider that will wrap our whole app and provide access to state
const GithubProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [githubUsers, setGithubUsers] = useState(mockUsers);
  const [repos, setRepos] = useState(mockRepos);

  //passed down this function in values as we'll use that in the SearchForm
  const searchGithubUser = async (user) => {
    const response = await fetch(
      `${ROOT_URL}/search/users?q=${user}&per_page=5?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    const userResponse = await response.json();
    if (userResponse) {
      const usersList = userResponse.items.slice(0, 5);
      setGithubUsers(usersList);
    } else {
      console.log("there is no user with that username");
    }
  };

  return (
    <GithubContext.Provider
      //object with properties
      value={{
        loading,
        searchTerm,
        setSearchTerm,
        githubUsers,
        searchGithubUser,
        repos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export { GithubProvider, GithubContext };
export const useGithubContext = () => {
  return useContext(GithubContext);
};
