import { Fragment } from "react";
import cn from "classnames";
import { Header, Navbar, Footer, TopBar, Services } from "@/components";
import { useMy } from "@/graphql/actions/auth.action";

export default function Layout({ children, wrapper, hideServices }) {
  const { data: { me } = {} } = useMy({ fetchPolicy: "cache-only" });
  return (
    <Fragment>
      <TopBar />
      <Header user={me} />
      <Navbar />
      <div className={cn("page-wrapper", wrapper)}>{children}</div>
      {!hideServices && <Services />}
      <Footer />
    </Fragment>
  );
}
