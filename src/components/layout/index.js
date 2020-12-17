import Head from "next/head";
import { Fragment } from "react";
import { Header, Navbar, Footer, TopBar, Services } from "../";

export default function Layout({ children }) {
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
      <Header />
      <Navbar />
      <div className="page-wrapper">{children}</div>
      <Services />
      <Footer />
    </Fragment>
  );
}
