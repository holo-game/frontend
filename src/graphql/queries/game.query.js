import { gql } from "@apollo/client";

const fragments = {
  game: gql`
    fragment GameFragment on Game {
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
  `,
};

export const GET_GAMES = gql`
  query($limit: Int, $start: Int, $sort: String, $where: JSON) {
    games(limit: $limit, start: $start, sort: $sort, where: $where) {
      ...GameFragment
    }
    gamesConnection {
      aggregate {
        count
      }
    }
  }
  ${fragments.game}
`;

export const GET_GAME = gql`
  query($id: ID!) {
    game(id: $id) {
      ...GameFragment
    }
  }
  ${fragments.game}
`;
