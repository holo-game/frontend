import {
  Layout,
  Paragraph,
  Container,
  Row,
  Col,
  GameCard,
  Hero,
  Button,
} from "@/components";
import { GAMES } from "@/constants";

function Games() {
  return (
    <Layout>
      <Hero>
        <Paragraph
          title="Oyunlar"
          icon={<i className="far fa-alien-monster text-two"></i>}
        />
      </Hero>
      <Container>
        <Row className="mx-n2">
          {GAMES.map((game) => (
            <Col
              key={game.id}
              className="col-lg-2 col-md-3 col-sm-4 col-4 px-2 mb-3"
            >
              <GameCard title={game.title} image={game.image} />
            </Col>
          ))}
        </Row>
        <div className="text-align-center mt-3">
          <Button title="Daha Çox" />
        </div>
      </Container>
    </Layout>
  );
}

export default Games;
