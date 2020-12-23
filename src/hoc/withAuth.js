import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMy } from "../graphql/actions/auth.action";

const withAuth = (Component, without) => (props) => {
  const router = useRouter();

  const { data: { me } = {} } = useMy();
  const user = me;

  useEffect(() => {
    if (user) {
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
    if (user) {
      return !without ? <Component {...props} /> : <div />;
    } else {
      return without ? <Component {...props} /> : <div />;
    }
  };

  return renderComponent();
};

export default withAuth;
