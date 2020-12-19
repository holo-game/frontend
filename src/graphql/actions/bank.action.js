import { useQuery } from "@apollo/client";
import { GET_BANKS } from "../queries/bank.query";

export const useBanks = (options) => useQuery(GET_BANKS, options);
