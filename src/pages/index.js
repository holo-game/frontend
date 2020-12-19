import {
  Layout,
  HeroSearch,
  Paragraph,
  Container,
  Row,
  Col,
  GameCard,
} from "@/components";
import { initializeApollo, addApolloState } from "@/lib/apolloClient";
import { useGames } from "@/graphql/actions/game.action";
import { GAMES } from "@/graphql/queries/game.query";

function Home(props) {
  const { data, loading, error } = useGames({ variables: { limit: 12 } });
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GAMES,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default Home;
