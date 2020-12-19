import { useState } from "react";
import Link from "next/link";
import {
  Layout,
  Container,
  Input,
  Panel,
  Button,
  Divider,
  Alert,
} from "@/components";
import { withAuth } from "../hoc";
import { useSignIn } from "../graphql/actions/auth.action";

function Login({ user }) {
  const [signIn, { loading, error, data }] = useSignIn();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    signIn({ variables: { identifier, password } });
  };

  const renderError = error && (
    <Alert variant="warning" size="sm" className="mb-3">
      Username və ya şifrə yanlışdır
    </Alert>
  );

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
            {renderError}
            <form onSubmit={onSubmit}>
              <Input.Group className="mb-4">
                <Input.Label>E-Mail və ya Username</Input.Label>
                <Input.Control
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  invert={true}
                  autoComplete="true"
                  className="w-100"
                />
              </Input.Group>
              <Input.Group className="mb-2">
                <Input.Label>Şifrə</Input.Label>
                <Input.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  invert={true}
                  autoComplete="true"
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
              <Button
                type="submit"
                variant="primary"
                className="w-100"
                loading={loading}
              >
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

export default withAuth(Login, true);
