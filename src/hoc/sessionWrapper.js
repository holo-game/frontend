import { PageLoader } from "@/components";
import { useMy } from "@/graphql/actions/auth.action";

const sessionWrapper = (Component) => (props) => {
  const { data: { me } = {}, loading } = useMy();

  const renderComponent = () => {
    if (loading) {
      return <PageLoader />;
    } else {
      return <Component {...props} user={me} />;
    }
  };

  return renderComponent();
};

export default sessionWrapper;
