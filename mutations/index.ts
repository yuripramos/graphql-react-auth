import gql from 'graphql-tag';

export const CreateDraftMutation = gql`
  mutation CreateDraftMutation($title: String!, $content: String) {
    createDraft(title: $title, content: $content) {
      id
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`;




export const PublishMutation = gql`
  mutation PublishMutation($id: Int!) {
    publish(id: $id) {
      id
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`;

export const DeleteMutation = gql`
  mutation DeleteMutation($id: Int!) {
    deletePost(id: $id) {
      id
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`;


export const LoginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;


export const SignupMutation = gql`
  mutation SignupMutation($name: String, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`