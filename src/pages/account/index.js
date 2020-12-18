import { Layout, Container } from "@/components";
import { withAuth } from "@/hoc";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store/";

function Account() {
  const { userStore } = useStore();
  return (
    <Layout>
      <Container>
        <button onClick={() => userStore.update({ status: false })}>
          Çıxış {userStore.data.status ? "var" : "yox"}
        </button>
        <button onClick={() => userStore.update({ username: 'eleviven' })}>
          username change
        </button>
      </Container>
    </Layout>
  );
}

export default withAuth(observer(Account));
