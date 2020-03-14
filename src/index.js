import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import gql from "graphql-tag";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

const link = new HttpLink({
  uri: "https://us1.prisma.sh/yuri-pereira-ramos-e03ba3/graphql-react-auth/dev"
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

// client
//   .query({
//     query: gql`
//       query {
//         users {
//           username
//         }
//       }
//     `
//   })
//   .then(result => console.log(result.data));

ReactDOM.render(<AppWithClientProvider />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
