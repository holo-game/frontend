import {
  Layout,
  HeroSearch,
  Paragraph,
  Container,
  Row,
  Col,
  GameCard,
} from "@/components";
import { useGames } from "@/graphql/actions/game.action";

function Home(props) {
  const { data } = useGames({ variables: { limit: 12 } });
  return (
    <Layout>
      <HeroSearch />
      <Container>
        <Paragraph
          title="Oyunlar"
          icon={<i className="far fa-alien-monster text-two"></i>}
        />
        <Row className="mx-n2">
          {data?.games.map((game) => (
            <Col
              key={game.id}
              className="col-lg-2 col-md-3 col-sm-4 col-4 px-2 mb-3"
            >
              <GameCard
                title={game.title}
                image={game.thumbnail.formats.small.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export default Home;
