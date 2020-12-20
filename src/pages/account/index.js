import { Layout, Container, Hero, Paragraph } from "@/components";
import { withAuth } from "@/hoc";

function Account({ user }) {
  return (
    <Layout hideServices={true}>
      <Container>
        <Hero>
          <Paragraph
            title="Hesabım"
            icon={<i className="far fa-ghost text-six"></i>}
          />
        </Hero>
      </Container>
    </Layout>
  );
}

export default withAuth(Account);
