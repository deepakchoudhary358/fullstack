import React, { Fragment } from "react";
import './App.css';
import UserList from "./components/UserList";

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand"> React with Forms handling </a>
      </nav>
      <UserList />
    </Fragment>
  );
}

export default App;
