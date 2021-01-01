import { useState } from "react";
import { useRouter } from "next/router";
import {
  Layout,
  Container,
  Input,
  Panel,
  Button,
  Head,
  Loading,
} from "@/components";
import { withAuth } from "@/hoc";
import { useResetPassword } from "@/graphql/actions/auth.action";
import { requestAlert } from "@/helpers";

function ForgotPassword() {
  const { query } = useRouter();
  const [resetPassword, { loading }] = useResetPassword();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const code = query?.code;

  const validationn = () => {
    let error = null;
    if (password.length < 6) {
      error = "Şifrəniz minimum 6 simvol olmalıdır.";
    } else if (password !== passwordConfirm) {
      error = "Təkrar daxil edilən şifrə uyğun deyil.";
    }
    return error;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const error = validationn();
    if (error) return requestAlert({ icon: "warning", text: error });
    if (loading) return;
    try {
      await resetPassword({
        variables: { password, passwordConfirmation: passwordConfirm, code },
      });
      setPassword("");
      setPasswordConfirm("");
    } catch (err) {
      requestAlert({ icon: "error", text: `Xəta baş verdi: ${err}` });
    }
  };

  return (
    <Layout hideServices={true} wrapper="login-wrapper">
      <Head title="Yeni Şifrə" />
      <Container narrow={true} className="py-3 py-sm-5">
        <Panel.Wrapper>
          <div className="text-align-center mt-4 mb-3">
            <h2>Yeni Şifrə</h2>
            <small className="text-five">
              Yeni şifrənizi daxil edin və yadda saxlayın
            </small>
          </div>
          <Panel.Body>
            <form onSubmit={onSubmit}>
              <Input.Group className="mb-4">
                <Input.Label>Yeni Şifrəniz</Input.Label>
                <Input.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  invert={true}
                  className="w-100"
                />
              </Input.Group>
              <Input.Group className="mb-4">
                <Input.Label>Şifrəni təkrar daxil edin</Input.Label>
                <Input.Control
                  type="password"
                  name="password-confirm"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  invert={true}
                  className="w-100"
                />
              </Input.Group>
              <Button type="submit" variant="primary" className="w-100">
                {loading && <Loading size="sm" className="mr-2" />}
                Yadda Saxla
              </Button>
            </form>
          </Panel.Body>
        </Panel.Wrapper>
      </Container>
    </Layout>
  );
}

export default withAuth(ForgotPassword, true);
