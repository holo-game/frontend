import { ApolloProvider } from "@apollo/client";
import { Provider } from "../store/";
import { useApollo } from "../lib/apolloClient";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
