import { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

export default (Component, without) =>
  observer((props) => {
    const router = useRouter();
    const { userStore } = useStore();

    useLayoutEffect(() => {
      if (userStore.data) {
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
      if (userStore.data) {
        return !without ? <Component {...props} /> : <div />;
      } else {
        return without ? <Component {...props} /> : <div />;
      }
    };

    return renderComponent();
  });
