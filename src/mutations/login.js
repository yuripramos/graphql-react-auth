import gql from "graphql-tag";
const LOGIN = gql`
  mutation login(username: String!, password: String!) {
    login($username, $password) {
      token
      user {
        id
        username
      }
    }
  }
`;
