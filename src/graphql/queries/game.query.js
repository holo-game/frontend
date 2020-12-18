import { gql } from "@apollo/client";

export const GAMES = gql`
  query {
    games {
      id
      title
      keywords
      description
      content
      thumbnail {
        formats
      }
      game_fields {
        title
      }
      game_prices {
        in_game_value
        value
      }
    }
  }
`;
