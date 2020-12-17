import { Container } from "..";

export default function TopBar(props) {
  return (
    <div className="topbar">
      <Container>
        <div className="topbar-content">
          <ul className="topbar-nav">
            <li>
              Mobil oyunlarda balansınızı artırın
            </li>
          </ul>
          <ul className="topbar-nav">
            <li>
              <a href="#">
                <i className="fab fa-telegram-plane"></i>
                <span>info@hologame.az</span>
              </a>
            </li>
            <li className="text-one">
              <a href="#">
                <i className="far fa-phone-alt"></i>
                <span>051 000 00 00</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
