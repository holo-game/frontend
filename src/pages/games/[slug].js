import { useRouter } from "next/router";
import {
  Layout,
  Hero,
  Paragraph,
  GameView,
  Panel,
  Container,
  Row,
  Col,
} from "@/components";
import { useGameBySlug } from "@/graphql/actions/game.action";

export default function Game() {
  const {
    query: { slug },
  } = useRouter();

  const { data: { gameBySlug } = {} } = useGameBySlug({ variables: { slug } });

  const game = gameBySlug;

  return (
    <Layout>
      <Hero>
        <Paragraph title={game?.title} icon={<i className="far fa-joystick text-six"></i>} />
      </Hero>
      <Container>
        <Row>
          <Col className="col-sm-9">
            <Panel.Wrapper>
              <GameView game={game} />
            </Panel.Wrapper>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
