import withApollo from "next-with-apollo";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities/";
import { setContext } from "@apollo/client/link/context";
import { isLoggedInVar, parseCookie } from "@/helpers";
import { API_URI } from "@/constants";

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export default withApollo(
  ({ initialState, headers }) => {
    let token;
    const isBrowser = typeof window !== "undefined";
    const httpLink = createHttpLink({
      uri: `${API_URI}/graphql`,
      credentials: "same-origin",
    });
    const authLink = setContext((_) => {
      if (isBrowser) {
        token = localStorage.getItem("userToken");
      } else {
        token = parseCookie("userToken", headers?.cookie);
      }
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    });
    return new ApolloClient({
      connectToDevTools: isBrowser,
      ssrMode: !isBrowser,
      link: authLink.concat(httpLink),
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              games: concatPagination(),
              isLoggedIn: {
                read() {
                  return isLoggedInVar();
                },
              },
            },
          },
        },
      }).restore(initialState || {}),
      typeDefs,
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
