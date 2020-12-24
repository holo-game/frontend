import { useRouter } from "next/router";
import {
  Layout,
  Paragraph,
  Container,
  Row,
  Col,
  GameCard,
  Hero,
  Button,
  Modal,
  GameView,
  ContextualLink,
} from "@/components";
import { useContextualRouting } from "@/lib/contextualRouting";
import { useGames, useGame } from "@/graphql/actions/game.action";

function Games() {
  const { query, push } = useRouter();
  const { returnHref } = useContextualRouting();
  const variables = {
    sort: "published_at:asc",
    limit: 6,
    start: 0,
  };

  const { data: { games, gamesConnection } = {}, fetchMore } = useGames({
    variables,
  });

  const { data: { game } = {} } = useGame({
    variables: { id: query.id },
    skip: !query?.id,
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
              <ContextualLink href={{ id: game.id }} as={`/games/${game.slug}`}>
                <GameCard
                  title={game.title}
                  image={game.thumbnail.formats.small.url}
                />
              </ContextualLink>
            </Col>
          ))}
        </Row>
        {areLoadMore && (
          <div className="text-align-center mt-3">
            <Button title="Daha Çox" onClick={loadMore} />
          </div>
        )}
      </Container>
      <Modal isOpen={query.id} onRequestClose={() => push(returnHref)}>
        <GameView game={game} />
      </Modal>
    </Layout>
  );
}

export default Games;
