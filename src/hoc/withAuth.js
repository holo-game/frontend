import { useEffect } from "react";
import { useRouter } from "next/router";
import { MY_DATA } from "@/graphql/queries/auth.query";
import { useApolloClient } from "@/lib/apolloClient";

const withAuth = (Component, without) => (props) => {
  const router = useRouter();
  const client = useApolloClient();

  const data = client.readQuery({ query: MY_DATA });
  const user = data?.me;

  useEffect(() => {
    if (user?.id) {
      if (without) {
        router.push("/");
      }
    } else {
      if (!without) {
        router.push("/login");
      }
    }
  });

  const renderComponent = () => {
    if (user?.id) {
      return !without ? <Component {...props} /> : <div />;
    } else {
      return without ? <Component {...props} /> : <div />;
    }
  };

  return renderComponent();
};

export default withAuth;
