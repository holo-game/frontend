import { useQuery } from "@apollo/client";
import { GET_GAMES, GET_GAME } from "../queries/game.query";

export const useGames = (options) => useQuery(GET_GAMES, options);
export const useGame = (options) => useQuery(GET_GAME, options);
