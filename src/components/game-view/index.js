import { useEffect, useState } from "react";
import {
  GameCard,
  Input,
  Button,
  Alert,
  Loading,
  Col,
  Row,
} from "@/components";
import { GameViewSkeleton } from "@/components/skeletons";
import { useCreateOrder } from "@/graphql/actions/order.action";
import { useLoggedIn } from "@/graphql/actions/auth.action";
import { randomString } from "@/helpers";

export default function GameView({ game }) {
  // User exists state
  const { data: { isLoggedIn } = {} } = useLoggedIn();
  // Create order mutation
  const [createOrder, { loading }] = useCreateOrder();
  // State
  const [price, setPrice] = useState(null);
  const [fields, setFields] = useState([]);
  const [error, setError] = useState(null);
  // Constants
  const thumbnail = game?.thumbnail?.formats.small.url;
  const pageLoading = !game?.hasOwnProperty("id");

  useEffect(() => {
    return () => {
      clearState();
    };
  }, [pageLoading]);

  // Methods
  const handleChange = (e) => {
    const { value, dataset: { index, title } = {} } = e.target;
    setFields((prevState) => {
      prevState[index] = { title, value };
      return [...prevState];
    });
    setError(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validation();
    if (error) return;
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
  const clearState = () => {
    setPrice(null);
    setFields([]);
    setError(null);
  };
  // Form Validation
  const validation = () => {
    let error = null;
    const isNullFields = fields.every((i) => i.value.length === 0);
    if (!isLoggedIn) {
      error = `Hesabınıza <a href="/login"><u>daxil olun</u></a> və ya <a href="/register"><u>qeydiyyatdan keçin</u></a>`;
    } else if (isNullFields) {
      error = "Bütün xanaları doldurmalısınız";
    } else if (price == null) {
      error = `${game.game_money} tarifi seçin`;
    }
    setError(error);
    return error;
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
                <Alert
                  variant={error ? "danger-thin" : "warning-thin"}
                  size="sm"
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: error || game.content }}
                  />
                </Alert>
              )}
              <div className="py-4">
                <Input.Group>
                  <Input.Label>{game.game_money} Seçin</Input.Label>
                </Input.Group>
                <div className="d-flex flex-wrap pb-1">
                  {game.game_prices?.map((i, index) => (
                    <div key={index} className="pr-3 mb-3">
                      <Button
                        type="button"
                        title={`${i.in_game_value} ${game.game_money}`}
                        onClick={() => {
                          setPrice({ index, value: i.value });
                          setError();
                        }}
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
                  {loading ? (
                    <Loading size="sm" variant="secondary" className="mr-3" />
                  ) : (
                    <i className="far fa-coin mr-3"></i>
                  )}
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
