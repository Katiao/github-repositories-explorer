import React, { useContext, useState } from "react";
require("dotenv").config();

const ROOT_URL = "https://api.github.com";
const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

//access to Provider:
const GithubContext = React.createContext();

//return the context provider that will wrap our whole app and provide access to state:
const GithubProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRepoLoading, setIsRepoLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [githubUsers, setGithubUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [showSearchSummary, setShowSearchSummary] = useState(false);
  const [searchedUser, setSearchedUser] = useState("");

  //passed down this function in values as we'll use that in the SearchForm
  const searchGithubUsers = async (user) => {
    setIsLoading(true);
    const response = await fetch(
      `${ROOT_URL}/search/users?q=${user}in:login&per_page=5?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    const userResponse = await response.json();
    if (userResponse) {
      const usersList = userResponse.items.slice(0, 5);
      setGithubUsers(usersList);
    } else {
      console.log("there is no user with that username");
    }
    setIsLoading(false);
    setShowSearchSummary(true);
  };

  //pass down this function in values so that we can use it in the UsersList.js:
  const searchRepos = async (login) => {
    setIsRepoLoading(true);
    const response = await fetch(
      `${ROOT_URL}/users/${login}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    const repoResponse = await response.json();
    if (repoResponse) {
      setRepos(repoResponse);
      setIsRepoLoading(false);
      setShowSearchSummary(false);
    } else {
      console.log("there are no repos for this user");
    }
  };

  return (
    <GithubContext.Provider
      value={{
        isLoading,
        isRepoLoading,
        searchTerm,
        setSearchTerm,
        githubUsers,
        searchGithubUsers,
        repos,
        searchRepos,
        showSearchSummary,
        searchedUser,
        setSearchedUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export { GithubProvider };
export const useGithubContext = () => {
  return useContext(GithubContext);
};
