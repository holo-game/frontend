import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLoggedIn } from "../graphql/actions/auth.action";

const withAuth = (Component, without) => (props) => {
  const router = useRouter();

  const { data: { isLoggedIn } = {} } = useLoggedIn();

  useEffect(() => {
    if (isLoggedIn) {
      if (without) {
        router.push("/");
      }
    } else {
      if (!without) {
        router.push({
          pathname: "/login",
          query: { message: "NOT_AUTHENTICATED" },
        });
      }
    }
  });

  const renderComponent = () => {
    if (isLoggedIn) {
      return !without ? <Component {...props} /> : <div />;
    } else {
      return without ? <Component {...props} /> : <div />;
    }
  };

  return renderComponent();
};

export default withAuth;
