import { useRouter } from "next/router";
import {
  Layout,
  HeroSearch,
  Paragraph,
  GameCard,
  Modal,
  GameView,
  ContextualLink,
  Container,
  Row,
  Col,
} from "@/components";
import { useContextualRouting } from "@/lib/contextualRouting";
import { useGames, useGame } from "@/graphql/actions/game.action";

function Home() {
  const { query, push } = useRouter();
  const { returnHref } = useContextualRouting();

  const { data: { games } = {} } = useGames({
    variables: { limit: 18 },
  });
  const { data: { game } = {} } = useGame({
    variables: { id: query.id },
    skip: !query?.id,
  });

  return (
    <Layout>
      <HeroSearch />
      <Container>
        <Paragraph
          title="Oyunlar"
          icon={<i className="far fa-alien-monster text-two"></i>}
        />
        <Row className="mx-n2">
          {games?.slice(0, 6).map((game) => (
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
      </Container>
      <Modal isOpen={query.id} onRequestClose={() => push(returnHref)}>
        <GameView game={game} />
      </Modal>
    </Layout>
  );
}

export default Home;
