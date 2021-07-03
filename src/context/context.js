import React, { useState } from "react";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";

//access to Provider:
const GithubContext = React.createContext();

//return the context provider that will wrap our whole app and provide access to state
const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);

  return (
    <GithubContext.Provider
      //object with properties
      value={{
        githubUser,
        repos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export { GithubContext, GithubProvider };
