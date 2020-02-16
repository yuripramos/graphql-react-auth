import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Loginform from "./LoginForm";

const App = props => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default App;
