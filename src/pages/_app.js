import { getDataFromTree } from "@apollo/client/react/ssr";
import { withApollo } from "@/hoc";
import { useMy } from "@/graphql/actions/auth.action";
import { PageLoader } from "@/components";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  const { data, loading } = useMy();
  const user = data?.me;

  const renderComponent = () => {
    if (loading) {
      return <PageLoader />;
    } else {
      return <Component {...pageProps} user={user} />;
    }
  };

  return renderComponent();
}

export default withApollo(App, { getDataFromTree });
