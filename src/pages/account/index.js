import { signOut } from "@/graphql/actions/auth.action";
import {
  Layout,
  Head,
  Container,
  Hero,
  Paragraph,
  Button,
  Row,
  Col,
  Panel,
} from "@/components";
import { withAuth } from "@/hoc";

function Account({ user, apolloClient }) {
  return (
    <Layout hideServices={true}>
      <Head title="Hesabım" />
      <Hero>
        <Paragraph
          title="Hesabım"
          icon={<i className="far fa-ghost text-six"></i>}
        />
      </Hero>
      <section className="pb-sm-5 pb-3">
        <Container>
          <Row>
            <Col className="col-sm-5">
              <Panel.Wrapper>
                <Panel.Body>
                  <div className="mb-3">
                    <label className="d-block">Username</label>
                    <strong>{user?.username}</strong>
                  </div>
                  <div>
                    <label className="d-block">E-Mail</label>
                    <strong>{user?.email}</strong>
                  </div>
                </Panel.Body>
                <Panel.Footer>
                  <Button
                    title="Çıxış"
                    variant="danger"
                    onClick={() => signOut(apolloClient)}
                  />
                </Panel.Footer>
              </Panel.Wrapper>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default withAuth(Account);
