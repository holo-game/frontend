import { Container, Breadcrumb } from "../";
import { useRouter } from "next/router";

export default function Hero({ children }) {
  const router = useRouter();
  const routes = router.pathname.split("/").splice(-1);
  return (
    <section className="hero">
      <Container>
        <div className="d-flex justify-content-sm-between justify-content-center">
          {children}
          <Breadcrumb routes={routes} className="d-sm-block d-none"/>
        </div>
      </Container>
    </section>
  );
}
