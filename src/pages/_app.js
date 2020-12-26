import { getDataFromTree } from "@apollo/client/react/ssr";
import { withApollo } from "@/hoc";
import { useMy } from "@/graphql/actions/auth.action";
import { PageLoader } from "@/components";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  const { data: { me } = {}, loading } = useMy();

  const renderComponent = () => {
    if (loading) {
      return <PageLoader />;
    } else {
      return <Component {...pageProps} user={me} />;
    }
  };

  return renderComponent();
}

export default withApollo(App, { getDataFromTree });
