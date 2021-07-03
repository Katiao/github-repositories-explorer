import React from "react";
import { GithubContext } from "./context/context";
import Search from "./components/Search";
import Button from "./components/Button";
import "./App.css";

function App() {
  const data = React.useContext(GithubContext);
  console.log(data);
  return (
    <div className="App">
      <div className="frame">
        <Search />
        <Button />
      </div>
    </div>
  );
}

export default App;
