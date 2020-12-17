import {
  Layout,
  Carousel,
  HeroSearch,
  Paragraph,
  Container,
  Row,
  Col,
  GameCard,
  ServiceCard,
} from "@/components";
import { GAMES } from "@/constants";

function Home() {
  return (
    <Layout>
      <HeroSearch />
      <Container>
        <Paragraph
          title="Oyunlar"
          icon={<i className="far fa-alien-monster text-two"></i>}
        />
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
      </Container>
    </Layout>
  );
}

export default Home;
