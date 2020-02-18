import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";
import AuthForm from "./AuthForm";
import Header from "./Header";
import mutation from "../mutations/Login";

const Loginform = ({ mutate }) => {
  const onSubmit = ({ email, password }) => {
    mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    });
  };

  return (
    <div className="container">
      <Header />
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit} />
    </div>
  );
};

export default graphql(mutation)(Loginform);
