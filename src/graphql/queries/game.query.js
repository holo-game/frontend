import { gql } from "@apollo/client";

export const GAMES = gql`
  query($limit: Int, $start: Int, $sort: String, $where: JSON) {
    games(limit: $limit, start: $start, sort: $sort, where: $where) {
      id
      title
      keywords
      description
      slug
      content
      game_money
      thumbnail {
        formats
      }
      game_fields {
        id
        title
      }
      game_prices {
        id
        in_game_value
        value
      }
    }
    gamesConnection {
      aggregate {
        count
      }
    }
  }
`;
