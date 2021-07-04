import React, { useContext, useState } from "react";
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
  const [githubUsers, setGithubUsers] = useState([]);
  const [repos, setRepos] = useState([]);

  //passed down this function in values as we'll use that in the SearchForm
  const searchGithubUsers = async (user) => {
    //setLoading(true)
    const response = await fetch(
      `${ROOT_URL}/search/users?q=${user}&per_page=5?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    const userResponse = await response.json();
    if (userResponse) {
      const usersList = userResponse.items.slice(0, 5);
      setGithubUsers(usersList);
      //console.log(usersList);
    } else {
      console.log("there is no user with that username");
    }
  };

  //pass down this function in values so that we can use it in the SingleUser.js
  const searchRepos = async (login) => {
    //setLoading true
    const response = await fetch(
      `${ROOT_URL}/users/${login}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    const repoResponse = await response.json();
    if (repoResponse) {
      setRepos(repoResponse);
    } else {
      console.log("there are no repos for this user");
    }
  };
  //console.log(repos);

  return (
    <GithubContext.Provider
      //object with properties
      value={{
        loading,
        searchTerm,
        setSearchTerm,
        githubUsers,
        searchGithubUsers,
        repos,
        searchRepos,
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
