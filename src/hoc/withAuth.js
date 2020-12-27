import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (Component, without) => (props) => {
  const router = useRouter();

  const me = props?.user;

  useEffect(() => {
    if (me) {
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
    if (me) {
      return !without ? <Component {...props} /> : <div />;
    } else {
      return without ? <Component {...props} /> : <div />;
    }
  };

  return renderComponent();
};

export default withAuth;
