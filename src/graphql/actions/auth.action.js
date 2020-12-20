import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { SIGN_IN, SIGN_UP, MY_DATA } from "@/graphql/queries/auth.query";
import { useApolloClient } from "@/lib/apolloClient";

const userToStorage = (user) => {
  const userToken = user?.jwt;
  const userData = user?.user;

  const client = useApolloClient();

  client.writeQuery({
    query: MY_DATA,
    data: {
      me: userData,
    },
  });

  if (userToken) {
    localStorage.setItem("userToken", userToken);
  }
};

export const useSignIn = (options) =>
  useMutation(SIGN_IN, {
    ...options,
    onError(err) {
      console.error(err);
    },
    onCompleted(data) {
      const user = data?.login;
      userToStorage(user);
    },
  });

export const useSignUp = (options) =>
  useMutation(SIGN_UP, {
    ...options,
    onError(err) {
      console.error(err);
    },
    onCompleted(data) {
      const user = data?.register;
      userToStorage(user);
    },
  });

export const useMy = (options) => useQuery(MY_DATA, { ...options });
export const useLazyMy = (options) => useLazyQuery(MY_DATA, { ...options });

export const signOut = () => {
  const client = useApolloClient();
  localStorage.removeItem("userToken");
  client.cache.reset();
};
