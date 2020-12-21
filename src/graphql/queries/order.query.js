import { gql } from "@apollo/client";

export const MY_ORDERS = gql`
  query($id: ID!) {
    user(id: $id) {
      orders {
        id
        order_code
        game {
          id
          title
          game_money
          slug
          thumbnail {
            formats
          }
        }
        prices {
          in_game_value
          value
        }
      }
    }
  }
`;
