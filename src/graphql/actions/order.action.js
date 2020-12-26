import Router from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { MY_ORDERS, NEW_ORDER } from "@/graphql/queries/order.query";
import { MY_DATA } from "@/graphql/queries/auth.query";
import { requestAlert } from "@/helpers";

export const useOrders = (options) => useQuery(MY_ORDERS, options);
export const useCreateOrder = (options) =>
  useMutation(NEW_ORDER, {
    ...options,
    refetchQueries: [{ query: MY_ORDERS, variables: { sort: "id:desc" } }],
    update(cache, { data: { createOrderByOwner: { order } = {} } }) {
      const { me } = cache.readQuery({ query: MY_DATA });
      if (!me || !order) return;
      const newBalance =
        parseFloat(me?.balance) - parseFloat(order?.prices.value);
      cache.writeQuery({
        query: MY_DATA,
        data: { me: { ...me, balance: newBalance } },
      });
    },
    onCompleted(data) {
      if (data) {
        requestAlert({
          icon: "success",
          title: "Sifarişiniz Tamamlandı",
          text:
            "Sifarişlərim səhifəsindən sifarişinizin statusunu görə bilərsiniz.",
          showCloseButton: true,
          confirmButtonText: "Sifarişlərim",
          showCancelButton: true,
          cancelButtonText: "Bağla",
        }).then((res) => {
          if (res.isConfirmed) {
            Router.push("/account/orders");
          }
        });
      }
    },
    onError(err) {
      requestAlert({
        icon: "error",
        title: "Xəta baş verdi!",
        text: err,
        confirmButtonText: "Bağla",
      });
    },
  });
