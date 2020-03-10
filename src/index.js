import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider as ApolloProviderHooks } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://localhost:3030"
});

ReactDOM.render(
  <ApolloProviderHooks client={client}>
    <App />
  </ApolloProviderHooks>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
