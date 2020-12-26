import { Container } from "@/components";
import { CONTACT } from "@/constants";

export default function TopBar(props) {
  return (
    <div className="topbar d-none d-md-block">
      <Container>
        <div className="topbar-content">
          <ul className="topbar-nav">
            <li>Oyunlardakı balansınızı artırın</li>
          </ul>
          <ul className="topbar-nav">
            {Object.values(CONTACT).map((i, index) => (
              <li key={index} className={i.highlight ? "text-one" : ""}>
                <a href="#">
                  <i className={i.icon}></i>
                  <span>{i.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
