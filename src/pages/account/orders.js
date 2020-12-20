import { Layout, Container, Hero, Paragraph, Avatar } from "@/components";
import { withAuth } from "@/hoc";

function Orders({ user }) {
  return (
    <Layout hideServices={true}>
      <Hero>
        <Paragraph
          title="Sifarişlərim"
          icon={<i className="far fa-shopping-bag text-one"></i>}
        />
      </Hero>
      <Container>
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
              <tr>
                <td>#230</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Avatar
                      src="/uploads/small_223dab8574bda5433484c505dddfde63_a7e6023a21.jpg"
                      size="sm"
                    />
                    <div className="pl-3">
                      <strong className="d-block mb-1">Pubg Mobile</strong>
                      <small className="text-one">
                        <strong>500 UC</strong>
                      </small>
                    </div>
                  </div>
                </td>
                <td>9.99 AZN</td>
                <td>Gözləyir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Layout>
  );
}

export default withAuth(Orders);
