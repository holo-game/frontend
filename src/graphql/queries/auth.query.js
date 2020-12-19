import { gql } from "@apollo/client";

const fragments = {
  user: gql`
    fragment Users on UsersPermissionsMe {
      id
      username
      email
      confirmed
      blocked
      role {
        name
        description
        type
      }
    }
  `,
};

export const SIGN_IN = gql`
  mutation($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        ...Users
      }
    }
  }
  ${fragments.user}
`;

export const SIGN_UP = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        ...Users
      }
    }
  }
  ${fragments.user}
`;

export const MY_DATA = gql`
  query {
    me {
      ...Users
    }
  }
  ${fragments.user}
`;
