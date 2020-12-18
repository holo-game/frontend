import { useQuery } from "@apollo/client";
import { GAMES } from "../queries/game.query";

export const useGames = (options) => useQuery(GAMES, options);
