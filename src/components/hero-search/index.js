import { Container, Search, Button } from "../";

export default function HeroSearch() {
  return (
    <section className="hero-search mb-4">
      <Container>
        <div className="hero-search-title mb-4">
          <h1>Hansı Oyunu Axtarırsınız?</h1>
        </div>
        <Search />
        <div className="d-flex justify-content-center mt-4">
          <Button variant="default" size="sm" className="mx-1">
            Pubg mobile
          </Button>
          <Button variant="default" size="sm" className="mx-1">
            Clash Royale
          </Button>
          <Button variant="default" size="sm" className="mx-1">
            Fortnite
          </Button>
          <Button variant="default" size="sm" className="mx-1">
            Point Blank
          </Button>
        </div>
      </Container>
    </section>
  );
}
