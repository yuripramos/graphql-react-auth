import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import gql from "graphql-tag";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { ApolloProvider } from "@apollo/react-hooks";

const link = new HttpLink({
  uri: "http://localhost:3030/"
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link
});

const AppWithClientProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<AppWithClientProvider />, document.getElementById("root"));

client
  .query({
    query: gql`
      query GetLaunch {
        launch(id: 56) {
          id
          mission {
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
