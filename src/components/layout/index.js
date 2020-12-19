import Head from "next/head";
import { Fragment } from "react";
import cn from "classnames";
import { Header, Navbar, Footer, TopBar, Services } from "../";
import { useMy } from "@/graphql/actions/auth.action";

export default function Layout({ children, wrapper, hideServices }) {
  const { data: { me } = {} } = useMy({ fetchPolicy: "cache-only" });
  return (
    <Fragment>
      <Head>
        <title>Əsas Səhifə | Hologame</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
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
