import Head from "next/head";
import { Fragment } from "react";
import { Header, Navbar, Footer, TopBar } from "../";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Əsas Səhifə | Hologame</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <TopBar />
      <Header />
      <Navbar />
      <div className="page-wrapper">{children}</div>
      <Footer />
    </Fragment>
  );
}
