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
} from "@/components";
import { CONTACT } from "@/constants";

export default function Contact() {
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
                <Input.Group className="mb-4">
                  <Input.Label>Ad Soyad</Input.Label>
                  <Input.Control
                    type="text"
                    name="fullname"
                    invert={true}
                    className="w-100"
                  />
                </Input.Group>
                <Input.Group className="mb-4">
                  <Input.Label>E-Mail ünvanınız</Input.Label>
                  <Input.Control
                    type="email"
                    name="email"
                    invert={true}
                    className="w-100"
                  />
                </Input.Group>
                <Input.Group className="mb-4">
                  <Input.Label>Telefon nömrəniz</Input.Label>
                  <Input.Control
                    type="phone"
                    name="phone"
                    invert={true}
                    className="w-100"
                  />
                </Input.Group>
                <Input.Group className="mb-3">
                  <Input.Label>Mesajınız</Input.Label>
                  <textarea
                    className="form-control invert w-100"
                    rows="5"
                    columns="3"
                  />
                </Input.Group>
                <Button title="Göndər" variant="primary" className="w-100" />
              </Panel.Body>
            </Panel.Wrapper>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
