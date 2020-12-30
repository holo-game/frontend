import { useState } from "react";
import { Layout, Container, Input, Panel, Button } from "@/components";
import { withAuth } from "@/hoc";
import { useForgotPassword } from "@/graphql/actions/auth.action";
import { requestAlert } from "@/helpers";
import { REGEX } from "@/constants";

function ForgotPassword() {
  const [forgotPassword, { loading }] = useForgotPassword();
  const [email, setEmail] = useState("");

  const validationn = () => {
    let error = null;
    if (!REGEX.email.test(email)) {
      console.log(REGEX.email.test(email));
      error = "Email düzgün daxil edilməyib";
    }
    return error;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const error = validationn();
    if (error) return requestAlert({ icon: "warning", text: error });
    try {
      await forgotPassword({ variables: { email } });
      requestAlert({
        icon: "success",
        text: `Şifrə bərpa linki ${email} ünvanına göndərildi.`,
      }).then((res) => setEmail(""));
    } catch (err) {
      requestAlert({ icon: "warning", text: "Belə email mövcud deyil" });
    }
  };

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
            <form onSubmit={onSubmit}>
              <Input.Group className="mb-4">
                <Input.Label>E-Mail ünvanınız</Input.Label>
                <Input.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  invert={true}
                  className="w-100"
                />
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

export default withAuth(ForgotPassword, true);
