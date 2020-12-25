import { useEffect, useState } from "react";
import { GameCard, Input, Button, Alert, Col, Row } from "@/components";
import GameViewSkeleton from "./game-view-skeleton";
import { useCreateOrder } from "@/graphql/actions/order.action";
import { randomString } from "@/helpers";

export default function GameView({ game }) {
  // Create order mutation
  const [createOrder, { data, loading }] = useCreateOrder();
  // State
  const [price, setPrice] = useState(null);
  const [fields, setFields] = useState([]);
  const [error, setError] = useState(null);
  // Constants
  const thumbnail = game?.thumbnail?.formats.small.url;
  const pageLoading = !game?.hasOwnProperty("id");

  useEffect(() => {
    return () => {
      setPrice(null);
      setFields([]);
    };
  }, [pageLoading]);

  // Methods
  const handleChange = (e) => {
    const { value, dataset: { index, title } = {} } = e.target;
    setFields((prevState) => {
      prevState[index] = { title, value };
      return [...prevState];
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const order_code = randomString();
    const prices = {
      in_game_value: game.game_prices[price?.index]?.in_game_value,
      value: price?.value,
    };
    createOrder({
      variables: {
        order_code,
        prices,
        fields,
        gameID: game.id,
      },
    });
  };
  // Component
  return (
    <div className="game-view">
      {!pageLoading ? (
        <Row>
          <Col className="d-md-block d-none col-sm-4">
            <GameCard image={thumbnail} title={game.title} isOverlay={false} />
          </Col>
          <Col className="col">
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column justify-content-between h-100"
            >
              {game.content && (
                <Alert variant="warning-thin" size="sm">
                  {game.content}
                </Alert>
              )}
              <div className="py-4">
                <div className="d-flex flex-wrap pb-1">
                  {game.game_prices?.map((i, index) => (
                    <div key={index} className="pr-3 mb-3">
                      <Button
                        type="button"
                        title={`${i.in_game_value} ${game.game_money}`}
                        onClick={() => setPrice({ index, value: i.value })}
                        className={index == price?.index ? "btn-primary" : ""}
                      />
                    </div>
                  ))}
                </div>
                {game.game_fields?.map((field, index) => (
                  <Input.Group key={index}>
                    <Input.Label>{field.title}</Input.Label>
                    <Input.Control
                      type="text"
                      key="key"
                      data-title={field.title}
                      data-index={index}
                      onChange={handleChange}
                      invert={true}
                      placeholder={`${field.title}'nizi daxil edin`}
                    />
                  </Input.Group>
                ))}
              </div>
              <div className="d-flex justify-content-between">
                <Button type="submit" variant="warning">
                  <i className="far fa-coin mr-3"></i>
                  <span>Satın Al</span>
                </Button>
                <div>
                  {price && (
                    <h2 className="my-0">
                      {parseFloat(price?.value).toFixed(2)} <small>AZN</small>
                    </h2>
                  )}
                </div>
              </div>
            </form>
          </Col>
        </Row>
      ) : (
        <GameViewSkeleton />
      )}
    </div>
  );
}

GameView.defaultProps = {
  game: {},
};
