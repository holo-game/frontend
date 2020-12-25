import { useMutation, useQuery } from "@apollo/client";
import { MY_ORDERS, NEW_ORDER } from "../queries/order.query";

export const useOrders = (options) => useQuery(MY_ORDERS, options);
export const useCreateOrder = (options) =>
  useMutation(NEW_ORDER, {
    ...options,
    refetchQueries: [{ query: MY_ORDERS, variables: { sort: "id:desc" } }],
  });
