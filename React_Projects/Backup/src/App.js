import React, { Fragment } from "react";
import './App.css';
//import Employee from "./components/Employee";
import Teacher from "./components/Teacher";
// import MessageCard from "./components/MessageCard";
// import WishCard from "./components/WishCard";
// import Employee from "./components/Employee";
// import Student from "./components/Student";

function App() {
  return (
    <Fragment>
      <nav className="navbar">
        <span> Root Component</span>
      </nav>
      {/* <Student name = "John" age = "29"/>
      <Student name = "Jonny" age = "31"/> */}
      <Teacher />

    </Fragment>
  );
}

export default App;
