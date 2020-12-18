import { Layout, Container, Input, Panel, Button } from "@/components";
import { withAuth } from "../hoc";

function Register() {
  return (
    <Layout hideServices={true} wrapper="login-wrapper">
      <Container narrow={true} className="py-3 py-sm-5">
        <Panel.Wrapper>
          <div className="text-align-center mt-4 mb-3">
            <h2>Hesab yarat</h2>
            <small className="text-five">
              Aşağıdakı formu dolduraraq qeydiyyatdan keçin
            </small>
          </div>
          <Panel.Body>
            <form>
              <Input.Group className="mb-4">
                <Input.Label>E-Mail</Input.Label>
                <Input.Control
                  type="email"
                  name="email"
                  invert={true}
                  className="w-100"
                />
              </Input.Group>
              <Input.Group className="mb-4">
                <Input.Label>Username</Input.Label>
                <Input.Control
                  type="text"
                  name="username"
                  invert={true}
                  className="w-100"
                />
              </Input.Group>
              <Input.Group className="mb-4">
                <Input.Label>Şifrə</Input.Label>
                <Input.Control
                  type="password"
                  name="password"
                  invert={true}
                  className="w-100"
                />
              </Input.Group>
              <Input.Group className="mb-4">
                <Input.Label>Şifrəni təkrarla</Input.Label>
                <Input.Control
                  type="password"
                  name="password-confirm"
                  invert={true}
                  className="w-100"
                />
              </Input.Group>
              <Button type="submit" variant="primary" className="w-100">
                Tamamla
              </Button>
            </form>
          </Panel.Body>
        </Panel.Wrapper>
      </Container>
    </Layout>
  );
}

export default withAuth(Register, true);
