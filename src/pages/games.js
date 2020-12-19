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
import { useGames } from "@/graphql/actions/game.action";

function Games() {
  const variables = {
    sort: "published_at:asc",
    limit: 6,
    start: 0,
  };

  const {
    data: { games, gamesConnection } = {},
    loading,
    error,
    fetchMore,
  } = useGames({
    variables,
  });

  const loadMore = () => {
    try {
      fetchMore({
        variables: {
          start: games?.length,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const areLoadMore = gamesConnection?.aggregate.count !== games?.length;

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
          {games?.map((game) => (
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
        {areLoadMore && (
          <div className="text-align-center mt-3">
            <Button title="Daha Çox" onClick={loadMore} />
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default Games;
