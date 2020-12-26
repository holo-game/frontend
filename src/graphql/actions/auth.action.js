import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import {
  SIGN_IN,
  SIGN_UP,
  MY_DATA,
  IS_LOGGED_IN,
} from "@/graphql/queries/auth.query";
import { useApolloClient } from "@/lib/apolloClient";
import { isLoggedInVar } from "@/helpers";

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
    isLoggedInVar(true);
  }
};

const userRemoveStorage = () => {
  localStorage.removeItem("userToken");
};

export const useSignIn = (options) => {
  return useMutation(SIGN_IN, {
    ...options,
    onError(err) {
      userRemoveStorage();
      console.error(err);
    },
    onCompleted(data) {
      const user = data?.login;
      userToStorage(user);
    },
  });
};

export const useSignUp = (options) => {
  return useMutation(SIGN_UP, {
    ...options,
    onError(err) {
      console.error(err);
      userRemoveStorage();
    },
    onCompleted(data) {
      const user = data?.register;
      userToStorage(user);
    },
  });
};

export const useMy = (options) =>
  useQuery(MY_DATA, {
    ...options,
    onCompleted(data) {
      if (data?.me) {
        isLoggedInVar(true);
      }
    },
  });
export const useLazyMy = (options) => useLazyQuery(MY_DATA, { ...options });

export const signOut = () => {
  const client = useApolloClient();
  userRemoveStorage();
  isLoggedInVar(false);
  client.cache.reset();
};

export const useLoggedIn = (options) => useQuery(IS_LOGGED_IN, options);

export const isLoggedIn = () => {
  const client = useApolloClient();
  const { isLoggedIn } = client.readQuery({ query: IS_LOGGED_IN });
  return isLoggedIn;
};
