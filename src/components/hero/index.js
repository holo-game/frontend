import { Container, Breadcrumb } from "../";
import { useRouter } from "next/router";

export default function Hero({ children }) {
  const router = useRouter();
  const routes = router.pathname.split("/").splice(-1);
  return (
    <section className="hero">
      <Container>
        <div className="d-flex justify-content-between">
          {children}
          <Breadcrumb routes={routes} />
        </div>
      </Container>
    </section>
  );
}
