import {
  Layout,
  Hero,
  Paragraph,
  Container,
  Panel,
  Input,
  Row,
  Col,
  Button,
  Alert,
  Divider,
} from "@/components";

{
  /* <Alert variant="warning-thin mb-4">
                  Sual, təklif və şikayətlərinizi bizə burdakı form
                  vasitəsi ilə göndərə bilərsiz.
                </Alert> */
}

export default function Contact() {
  return (
    <Layout>
      <Hero>
        <Paragraph
          title="Əlaqə"
          icon={<i className="far fa-phone-rotary text-three"></i>}
        />
      </Hero>
      <Container>
        <Row className="flex-sm-row flex-column-reverse">
          <Col className="col-lg-7 col-md-6">
            <div>
              <h3 className="text-five">Telefon</h3>
              <p>+994 51 000 00 00</p>
              <h3 className="text-five">E-Mail</h3>
              <p>info@hologame.az</p>
              <hr />
              <p className="text-five mt-3">Həftə içi saat 10:00 dan 19:00 a qədər əlaqə saxlaya bilərsiniz</p>
            </div>
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
