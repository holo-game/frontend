import { useEffect } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import tawkTo from "tawkto-react";
import { withApollo } from "@/hoc";
import { useMy } from "@/graphql/actions/auth.action";
import { PageLoader } from "@/components";
import "../styles/globals.scss";

const tawkToPropertyId = "60ae9b35de99a4282a19c0a8";
const tawkToKey = "1f6l0sicr";

function App({ Component, pageProps, apollo }) {
  const { data: { me } = {}, loading } = useMy();

  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
  }, []);

  const renderComponent = () => {
    if (loading) {
      return <PageLoader />;
    } else {
      return <Component user={me} apolloClient={apollo} {...pageProps} />;
    }
  };

  return renderComponent();
}

export default withApollo(App, { getDataFromTree });
