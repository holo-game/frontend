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
import { useBanks } from "@/graphql/actions/bank.action";

function BankTransfer() {
  const { data: { bankAccounts } = {}, loading, error } = useBanks();
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
          vasitəsiylə ödəniş edib, çekin şəklini canlı dəstək xidmətinə
          göndərin.
        </Alert>
        <Row className="my-sm-5 my-3">
          {bankAccounts?.map((item) => (
            <Col key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              <BankCard
                image={item.thumbnail.url}
                bankName={item.bank_name}
                cardNumber={item.card_number}
                accountHolder={item.account_holder}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export default BankTransfer;
