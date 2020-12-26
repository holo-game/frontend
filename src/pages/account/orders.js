import { Layout, Head, Container, Hero, Paragraph, Avatar } from "@/components";
import { withAuth } from "@/hoc";
import { useOrders } from "@/graphql/actions/order.action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Orders() {
  const { data: { ordersByMe } = {}, loading } = useOrders({
    variables: { sort: "id:desc" },
  });
  const status = (con) => (con ? "Yükləndi" : "Gözləyir");
  return (
    <Layout hideServices={true}>
      <Head title="Sifarişlərim" />
      <Hero>
        <Paragraph
          title="Sifarişlərim"
          icon={<i className="far fa-shopping-bag text-one"></i>}
        />
      </Hero>
      <Container>
        {!loading ? (
          <div className="table mb-5">
            <table>
              <thead>
                <tr>
                  <th>Kod</th>
                  <th>Sifariş</th>
                  <th>Qiymət</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {ordersByMe?.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.order_code}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Avatar
                          src={order.game?.thumbnail?.formats?.small.url}
                          size="sm"
                        />
                        <div className="pl-3">
                          <strong className="d-block mb-1">
                            {order.game.title}
                          </strong>
                          <small className="text-one">
                            <strong>
                              {order.prices.in_game_value}{" "}
                              {order.game.game_money}
                            </strong>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td>{order.prices.value} AZN</td>
                    <td>{status(order.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="pb-4">
            <SkeletonTheme color="#272b3a" highlightColor="#383e52">
              <Skeleton
                count="6"
                height="40px"
                style={{ marginBottom: "15px" }}
              />
            </SkeletonTheme>
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default withAuth(Orders);
