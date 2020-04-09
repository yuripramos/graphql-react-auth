import gql from 'graphql-tag';

export const FeedQuery = gql`
  query FeedQuery {
    feed {
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

export const isAuthenticatedQuery = gql`
  query isAuthenticatedQuery {
    me {
      id
      name
      email
    }
  }
`;

export const DraftsQuery = gql`
  query DraftsQuery {
    drafts {
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

export const PostQuery = gql`
  query PostQuery($id: ID!) {
    post(id: $id) {
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
