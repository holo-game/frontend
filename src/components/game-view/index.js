import { useEffect, useState } from "react";
import { GameCard, Input, Button, Alert, Col, Row } from "../";
import GameViewSkeleton from "./game-view-skeleton";

export default function GameView({ game }) {
  const thumbnail = game?.thumbnail?.formats.small.url;
  const [price, setPrice] = useState(null);
  const [state, setState] = useState([]);
  const loading = !game.hasOwnProperty("id");

  useEffect(() => {
    return () => {
      setPrice(null);
      setState([]);
    };
  }, []);

  const handleChange = (e) => {
    const { value, dataset: { index, title } = {} } = e.target;
    setState((prevState) => {
      prevState[index] = { title, value };
      return [...prevState];
    });
  };

  return (
    <div className="game-view">
      {!loading ? (
        <Row>
          <Col className="d-md-block d-none col-sm-4">
            <GameCard image={thumbnail} title={game.title} isOverlay={false} />
          </Col>
          <Col className="col">
            <div className="d-flex flex-column h-100">
              <div className="flex-fill">
                {game.content && (
                  <Alert variant="warning-thin" size="sm" className="mb-4">
                    {game.content}
                  </Alert>
                )}
                <div className="d-flex pb-4">
                  {game.game_prices?.map((i, index) => (
                    <div key={index} className="pr-3">
                      <Button
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
              <div className="d-flex justify-content-between pt-4">
                <Button variant="warning">
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
            </div>
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
