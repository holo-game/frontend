import { gql } from "@apollo/client";

export const MY_ORDERS = gql`
  query($sort: String) {
    ordersByMe(sort: $sort) {
      id
      order_code
      status
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
`;

export const NEW_ORDER = gql`
  mutation(
    $order_code: String!
    $fields: [ComponentFieldsOrderFieldInput!]
    $prices: ComponentFieldsGamePriceInput!
    $gameID: ID!
  ) {
    createOrderByOwner(
      input: {
        data: {
          order_code: $order_code
          fields: $fields
          prices: $prices
          game: $gameID
          status: false
        }
      }
    ) {
      order {
        id
        order_code
        status
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
