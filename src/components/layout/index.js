import Head from "next/head";
import { Fragment } from "react";
import cn from "classnames";
import { Header, Navbar, Footer, TopBar, Services } from "@/components";
import { useMy } from "@/graphql/actions/auth.action";
import { META, APP_NAME } from "@/constants";

export default function Layout({ children, wrapper, hideServices }) {
  const { data: { me } = {} } = useMy({ fetchPolicy: "cache-only" });
  return (
    <Fragment>
      <Head>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="keywords" content={META.keywords} />
        <meta property="og:title" content={META.title} />
        <meta property="og:url" content={META.url} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={META.image} />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <TopBar />
      <Header user={me} />
      <Navbar />
      <div className={cn("page-wrapper", wrapper)}>{children}</div>
      {!hideServices && <Services />}
      <Footer />
    </Fragment>
  );
}
