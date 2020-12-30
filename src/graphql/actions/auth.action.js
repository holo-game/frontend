import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import {
  SIGN_IN,
  SIGN_UP,
  MY_DATA,
  IS_LOGGED_IN,
  FORGOT_PASSWORD,
} from "@/graphql/queries/auth.query";
import { isLoggedInVar } from "@/helpers";
import Cookies from "js-cookie";

const userToStorage = (client, user) => {
  const userToken = user?.jwt;
  const userData = user?.user;

  client.writeQuery({
    query: MY_DATA,
    data: {
      me: userData,
    },
  });

  if (userToken) {
    Cookies.set("userToken", userToken);
    localStorage.setItem("userToken", userToken);
    isLoggedInVar(true);
  }
};

const userRemoveStorage = () => {
  Cookies.set("userToken", "");
  localStorage.removeItem("userToken");
  isLoggedInVar(false);
};

export const useSignIn = (options) => {
  return useMutation(SIGN_IN, {
    ...options,
    onError(err) {
      userRemoveStorage();
      console.error(err);
    },
    update(cache, { data }) {
      const user = data?.login;
      userToStorage(cache, user);
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
    update(cache, { data }) {
      const user = data?.register;
      userToStorage(cache, user);
    },
  });
};

export const useForgotPassword = (options) =>
  useMutation(FORGOT_PASSWORD, options);

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

export const useLoggedIn = (options) => useQuery(IS_LOGGED_IN, options);

export const signOut = (apolloClient) => {
  userRemoveStorage();
  apolloClient.writeQuery({ query: MY_DATA, data: { me: null } });
};
