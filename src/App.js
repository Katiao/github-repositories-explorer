import React from "react";
import { GithubContext } from "./context/context";
import "./App.css";

function App() {
  const data = React.useContext(GithubContext);
  console.log(data);
  return (
    <div className="App">
      <h1> GitHub Repositories explorer</h1>
    </div>
  );
}

export default App;
