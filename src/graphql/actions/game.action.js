import { useQuery } from "@apollo/client";
import { GET_GAMES, GET_GAME, GET_GAME_BY_SLUG } from "../queries/game.query";

export const useGames = (options) => useQuery(GET_GAMES, options);
export const useGame = (options) => useQuery(GET_GAME, options);
export const useGameBySlug = (options) => useQuery(GET_GAME_BY_SLUG, options);
