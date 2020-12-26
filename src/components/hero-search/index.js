import { useRouter } from "next/router";
import { Container, Search, Button } from "@/components";
import { GAME_TAGS } from "@/constants";

export default function HeroSearch() {
  const { push } = useRouter();
  return (
    <section className="hero-search mb-4">
      <Container>
        <div className="hero-search-title mb-4">
          <h1>Hansı Oyunu Axtarırsınız?</h1>
        </div>
        <Search />
        <div className="d-flex justify-content-center mt-4">
          {GAME_TAGS.map((game, index) => (
            <Button
              onClick={() =>
                push({ pathname: "/games", query: { search: game } })
              }
              key={index}
              variant="default"
              size="sm"
              className="mx-1"
            >
              {game}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
