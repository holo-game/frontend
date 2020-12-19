import { gql } from "@apollo/client";

export const GET_BANKS = gql`
  query {
    bankAccounts {
      id
      bank_name
      account_holder
      card_number
      thumbnail {
        url
      }
    }
  }
`;
