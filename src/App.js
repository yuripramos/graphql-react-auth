import React from "react";
import { Heading } from "rebass";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Heading fontSize={[5, 6, 7]} color="blue">
        Hello, user, please login
      </Heading>
      <LoginForm />
    </div>
  );
}

export default App;
