import { Fragment } from "react";
import Head from "next/head";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { withApollo } from "@/hoc";
import { useMy } from "@/graphql/actions/auth.action";
import { PageLoader } from "@/components";
import { APP_NAME, APP_DESCRIPTION } from "@/constants";
import "../styles/globals.scss";

function App({ Component, pageProps, apollo }) {
  const { data: { me } = {}, loading } = useMy();
  const renderComponent = () => {
    if (loading) {
      return <PageLoader />;
    } else {
      return <Component user={me} apolloClient={apollo} {...pageProps} />;
    }
  };
  return (
    <Fragment>
      <Head>
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#272b3a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/icon-180x180"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      {renderComponent()}
    </Fragment>
  );
}

export default withApollo(App, { getDataFromTree });
