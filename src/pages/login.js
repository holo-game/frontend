import Link from "next/link";
import { Layout, Container, Input, Panel, Button, Divider } from "@/components";

export default function Login() {
  return (
    <Layout hideServices={true} wrapper="login-wrapper">
      <Container narrow={true} className="py-3 py-sm-5">
        <Panel.Wrapper>
          <div className="text-align-center mt-4 mb-3">
            <h2>Xoş gəldin!</h2>
            <small className="text-five">
              Hesabına daxil ol və ya qeydiyyatdan keç
            </small>
          </div>
          <Panel.Body>
            <form>
              <Input.Group className="mb-4">
                <Input.Label>E-Mail və ya Username</Input.Label>
                <Input.Control type="text" invert={true} className="w-100" />
              </Input.Group>
              <Input.Group className="mb-2">
                <Input.Label>Şifrə</Input.Label>
                <Input.Control
                  type="password"
                  invert={true}
                  className="w-100"
                />
              </Input.Group>
              <div className="mb-4">
                <small>
                  <Link href="/forgot-password">
                    <a className="text-thin-primary">Şifrəni unutmusan?</a>
                  </Link>
                </small>
              </div>
              <Button type="submit" variant="primary" className="w-100">
                Giriş
              </Button>
              <Divider title="Hesabın yoxdu?" />
              <Link href="/register">
                <a className="btn btn-default w-100">Qeydiyyat</a>
              </Link>
            </form>
          </Panel.Body>
        </Panel.Wrapper>
      </Container>
    </Layout>
  );
}
