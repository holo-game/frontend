import { useState } from "react";
import {
  Layout,
  Head,
  Hero,
  Paragraph,
  Container,
  Panel,
  Input,
  Row,
  Col,
  Button,
  Alert,
  Loading,
} from "@/components";
import { useCreateMessage } from "@/graphql/actions/message.action.js";
import { requestAlert } from "@/helpers";
import { CONTACT, REGEX } from "@/constants";

const initialState = {
  fullname: "",
  email: "",
  phone: "",
  content: "",
};

export default function Contact() {
  const [createMessage, { loading }] = useCreateMessage();
  const [state, setState] = useState({ ...initialState });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validation = () => {
    let errors = null;
    if (state.fullname.length < 3) {
      errors = "Adınız minimum 3 simvol olmalıdır";
    } else if (!REGEX.email.test(state.email)) {
      errors = "Email düzgün daxil edilməyib";
    } else if (!state.phone || state.phone.length >= 15) {
      errors = "Telefon düzgün daxil edilməyib";
    } else if (state.content.trim().length < 10) {
      errors = "Mesaj mətni çox qısadır";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validation();
    if (errors) return requestAlert({ icon: "warning", text: errors });
    try {
      await createMessage({ variables: { ...state } });
      setState({ ...initialState });
      requestAlert({
        icon: "success",
        title: "Mesajınız göndərildi",
        text: "Qısa zamanda sizinlə əlaqə saxlanılacaq",
      });
    } catch (err) {
      requestAlert({ icon: "error", text: err });
    }
  };

  return (
    <Layout>
      <Head title="Əlaqə" />
      <Hero>
        <Paragraph
          title="Əlaqə"
          icon={<i className="far fa-phone-rotary text-three"></i>}
        />
      </Hero>
      <Container>
        <Row className="flex-sm-row flex-column-reverse">
          <Col className="col-lg-7 col-md-6">
            <Alert variant="warning-thin" size="sm">
              Həftə içi saat 10:00 dan 19:00 a qədər əlaqə saxlaya bilərsiniz
            </Alert>
            <hr className="my-4" />
            <ul>
              {Object.values(CONTACT).map((i, index) => (
                <li key={index} className="mb-3">
                  <h3 className="text-five">{i.title}</h3>
                  <p>{i.value}</p>
                </li>
              ))}
            </ul>
          </Col>
          <Col className="col-lg-5 col-md-6">
            <Panel.Wrapper className="mb-4 mb-sm-0">
              <Panel.Body>
                <form onSubmit={handleSubmit}>
                  <Input.Group className="mb-4">
                    <Input.Label>Ad Soyad</Input.Label>
                    <Input.Control
                      type="text"
                      name="fullname"
                      value={state.fullname}
                      invert={true}
                      className="w-100"
                      onChange={handleChange}
                    />
                  </Input.Group>
                  <Input.Group className="mb-4">
                    <Input.Label>E-Mail ünvanınız</Input.Label>
                    <Input.Control
                      type="email"
                      name="email"
                      value={state.email}
                      invert={true}
                      className="w-100"
                      onChange={handleChange}
                    />
                  </Input.Group>
                  <Input.Group className="mb-4">
                    <Input.Label>Telefon nömrəniz</Input.Label>
                    <Input.Control
                      type="phone"
                      name="phone"
                      value={state.phone}
                      invert={true}
                      className="w-100"
                      onChange={handleChange}
                    />
                  </Input.Group>
                  <Input.Group className="mb-3">
                    <Input.Label>Mesajınız</Input.Label>
                    <textarea
                      name="content"
                      value={state.content}
                      className="form-control invert w-100"
                      rows="5"
                      columns="3"
                      onChange={handleChange}
                    />
                  </Input.Group>
                  <Button type="submit" variant="primary" className="w-100">
                    {loading && <Loading size="sm" className="mr-3" />} Göndər
                  </Button>
                </form>
              </Panel.Body>
            </Panel.Wrapper>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
