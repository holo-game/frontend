import { Container } from "../";

export default function HeroSearch() {
  return (
    <section className="hero-search mb-4">
      <Container>
        <div className="hero-search-title mb-4">
          <h1>Hansı Oyunu Axtarırsınız?</h1>
        </div>
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control with-addon"
              placeholder="Oyunun adını daxil edin"
            />
            <button className="input-group-addon btn-primary">
              <i className="far fa-search"></i>
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center mt-4">
          <a href="#" className="btn btn-default btn-sm mx-1">
            Pubg mobile
          </a>
          <a href="#" className="btn btn-default btn-sm mx-1">
            Clash Royale
          </a>
          <a href="#" className="btn btn-default btn-sm mx-1">
            Fortnite
          </a>
          <a href="#" className="btn btn-default btn-sm mx-1">
            Point Blank
          </a>
        </div>
      </Container>
    </section>
  );
}
