import gql from "graphql-tag";

export const LOGIN = gql`
  mutation {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;
