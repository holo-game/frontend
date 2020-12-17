import {
  Layout,
  Paragraph,
  Container,
  Row,
  Col,
  Hero,
  Alert,
  BankCard,
} from "@/components";

function BankTransfer() {
  return (
    <Layout hideServices={true}>
      <Hero>
        <Paragraph
          title="Balans Yüklə"
          icon={<i className="far fa-sack text-three"></i>}
        />
      </Hero>
      <Container>
        <Alert variant="warning-thin">
          Aşağıdakı bank hesablarına milliön, emanat və ya digər terminallar
          vasitəsiylə ödəniş edib, çekin şəklini canlı dəstək xidmətinə göndərin.
        </Alert>
        <Row className="my-sm-5 my-3">
          <Col className="col-lg-3 col-md-4 col-sm-6">
            <BankCard
              image="/images/cards/1.png"
              bank="Kapital Bank"
              cardNumber="4169 7413 6687 0010"
              accountHolder="John Doe"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default BankTransfer;
