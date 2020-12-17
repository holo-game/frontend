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
        <Row className="my-5">
          <Col className="col-sm-3">
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
