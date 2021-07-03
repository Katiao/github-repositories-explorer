import React, { useContext, useState } from "react";
import mockUsers from "./mockData/mockUsers";
import mockRepos from "./mockData/mockRepos";

//access to Provider:
const GithubContext = React.createContext();

//return the context provider that will wrap our whole app and provide access to state
const GithubProvider = ({ children }) => {
  //change loading to true
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [githubUsers, setGithubUsers] = useState(mockUsers);
  const [repos, setRepos] = useState(mockRepos);

  return (
    <GithubContext.Provider
      //object with properties
      value={{
        loading,
        searchTerm,
        setSearchTerm,
        githubUsers,
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
