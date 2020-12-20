import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";

export default withApollo(
  ({ initialState }) => {
    return initializeApollo(initialState);
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
