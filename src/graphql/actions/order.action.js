import { useQuery } from "@apollo/client";
import { MY_ORDERS } from "../queries/order.query";

export const useOrders = (options) => useQuery(MY_ORDERS, options);
