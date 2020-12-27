import { useState } from "react";
import { withAuth } from "@/hoc";
import { useSignUp } from "@/graphql/actions/auth.action";
import { Layout, Container, Input, Panel, Button, Alert } from "@/components";
import { REGEX } from "../constants";

function Register() {
  const [signUp, { loading, error }] = useSignUp();

  const [userState, setUserState] = useState({
    username: "",
    password: "",
    password_confirm: "",
    email: "",
  });

  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState({
      ...userState,
      [name]: value,
    });
  };

  const validation = () => {
    const err = {};
    if (userState.username.length < 3) {
      err.message = "Username minimum 3 simvol olmalıdır";
    } else if (userState.password.length < 6) {
      err.message = "Şifrə minimum 6 simvol olmalıdır";
    } else if (userState.password !== userState.password_confirm) {
      err.message = "Şifrələr uyğun deyil";
    } else if (!REGEX.email.test(userState.email)) {
      err.message = "E-Mail düzgün deyil";
    }
    setErrors(err.message && err);
    return err;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validation();
    if (!err.message) {
      signUp({
        variables: { ...userState },
      });
    }
  };

  const renderError = (error || errors) && (
    <Alert variant="warning" size="sm" className="mb-3">
      {errors?.message || "Xəta baş verdi!"}
    </Alert>
  );

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
            {renderError}
            <form onSubmit={onSubmit}>
              <Input.Group className="mb-4">
                <Input.Label>E-Mail</Input.Label>
                <Input.Control
                  type="email"
                  name="email"
                  value={userState.email}
                  onChange={handleChange}
                  invert={true}
                  autoComplete="true"
                  className="w-100"
                />
              </Input.Group>
              <Input.Group className="mb-4">
                <Input.Label>Username</Input.Label>
                <Input.Control
                  type="text"
                  name="username"
                  value={userState.username}
                  onChange={handleChange}
                  invert={true}
                  autoComplete="false"
                  className="w-100"
                />
              </Input.Group>
              <Input.Group className="mb-4">
                <Input.Label>Şifrə</Input.Label>
                <Input.Control
                  type="password"
                  name="password"
                  value={userState.password}
                  onChange={handleChange}
                  invert={true}
                  autoComplete="false"
                  className="w-100"
                />
              </Input.Group>
              <Input.Group className="mb-4">
                <Input.Label>Şifrəni təkrarla</Input.Label>
                <Input.Control
                  type="password"
                  name="password_confirm"
                  value={userState.password_confirm}
                  onChange={handleChange}
                  invert={true}
                  autoComplete="false"
                  className="w-100"
                />
              </Input.Group>
              <Button
                type="submit"
                variant="primary"
                className="w-100"
                loading={loading}
              >
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
