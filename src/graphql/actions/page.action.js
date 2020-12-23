import { useQuery } from "@apollo/client";
import { GET_PAGES, GET_PAGE } from "../queries/page.query";

export const usePages = (options) => useQuery(GET_PAGES, options);
export const usePage = (options) => useQuery(GET_PAGE, options);
