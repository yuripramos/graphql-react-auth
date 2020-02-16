import React, { Component } from "react";
import AuthForm from "./AuthForm";
import Header from "./Header";

const Loginform = () => {
  return (
    <div className="container">
      <Header />
      <h3>Login</h3>
      <AuthForm />
    </div>
  );
};

export default Loginform;
