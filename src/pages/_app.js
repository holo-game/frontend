import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/apolloClient";
import { sessionWrapper } from "@/hoc";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  // Apollo Client
  const apolloClient = useApollo(pageProps);
  // Session Wrapper
  const RenderComponent = sessionWrapper(Component);
  return (
    <ApolloProvider client={apolloClient}>
      <RenderComponent {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
