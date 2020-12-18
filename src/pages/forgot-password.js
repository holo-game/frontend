import { Layout, Container, Input, Panel, Button } from "@/components";

export default function ForgotPassword() {
  return (
    <Layout hideServices={true} wrapper="login-wrapper">
      <Container narrow={true} className="py-3 py-sm-5">
        <Panel.Wrapper>
          <div className="text-align-center mt-4 mb-3">
            <h2>Şifrə Bərpası</h2>
            <small className="text-five">
              E-Mail ünvanınızı daxil edin və göndər buttonuna basın
            </small>
          </div>
          <Panel.Body>
            <form>
              <Input.Group className="mb-4">
                <Input.Label>E-Mail ünvanınız</Input.Label>
                <Input.Control type="email" name="email" invert={true} className="w-100" />
              </Input.Group>
              <Button type="submit" variant="primary" className="w-100">
                Göndər
              </Button>
            </form>
          </Panel.Body>
        </Panel.Wrapper>
      </Container>
    </Layout>
  );
}
