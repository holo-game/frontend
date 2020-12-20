import { gql } from "@apollo/client";

const fragments = {
  user: gql`
    fragment User on UsersPermissionsMe {
      id
      username
      email
      balance
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
        ...User
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
        ...User
      }
    }
  }
  ${fragments.user}
`;

export const MY_DATA = gql`
  query {
    me {
      ...User
    }
  }
  ${fragments.user}
`;
