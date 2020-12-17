import { Container, Row, Col, ServiceCard } from "../";

export default function Services() {
  return (
    <section className="pt-sm-5 pt-3 pb-sm-4 pb-1">
      <Container>
        <Row className="mx-n2">
          <Col className="col-lg-3 col-sm-6 mb-3 px-2">
            <ServiceCard
              title="Sürətli çatdırma"
              paragraph="7 gün 24 saat alqı və satqı işləriniz gərçəkləşdirilir."
              iconColor="bg-four"
              icon={<i className="far fa-rocket-launch"></i>}
            />
          </Col>
          <Col className="col-lg-3 col-sm-6 mb-3 px-2">
            <ServiceCard
              title="Güvənli Alışveriş"
              paragraph="3D ve SSL güvəncəsiylə ödəmə edə bilərsiniz."
              iconColor="bg-two"
              icon={<i className="far fa-shield-alt"></i>}
            />
          </Col>
          <Col className="col-lg-3 col-sm-6 mb-3 px-2">
            <ServiceCard
              title="Uyğun Qiymət"
              paragraph="Endirimli və ən uyğun qiymətlərdən yararlanın."
              iconColor="bg-three"
              icon={<i className="far fa-coin"></i>}
            />
          </Col>
          <Col className="col-lg-3 col-sm-6 mb-3 px-2">
            <ServiceCard
              title="Məmnuniyyət"
              paragraph="Müştərilərimizə keyfiyyətli xidmət təklif edirik."
              iconColor="bg-one text-secondary"
              icon={<i className="far fa-smile"></i>}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
