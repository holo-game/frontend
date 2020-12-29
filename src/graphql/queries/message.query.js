import { gql } from "@apollo/client";

export const NEW_MESSAGE = gql`
  mutation(
    $fullname: String!
    $email: String!
    $phone: String!
    $content: String!
  ) {
    createMessage(
      input: {
        data: {
          fullname: $fullname
          email: $email
          phone: $phone
          content: $content
        }
      }
    ) {
      message {
        id
      }
    }
  }
`;
