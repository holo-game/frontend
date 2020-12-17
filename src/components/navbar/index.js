import { NavLink, Input } from "@/components/";

export default function Navbar(props) {
  return (
    <nav className="navbar d-none d-sm-flex">
      <div className="container">
        <div className="navbar-content">
          <ul className="navbar-nav">
            <li>
              <NavLink href="/" activeClassName="active">
                <a>
                  <i className="far fa-home-alt text-one"></i>
                  <span>Əsas Səhifə</span>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/games" activeClassName="active">
                <a>
                  <i className="far fa-alien-monster text-two"></i>
                  <span>Oyunlar</span>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/deposit" activeClassName="active">
                <a>
                  <i className="far fa-sack text-three"></i>
                  <span>Balans Yüklə</span>
                </a>
              </NavLink>
            </li>
          </ul>
          <ul className="d-none d-md-flex">
            <li>
              <Input.Group>
                <Input.Control
                  type="text"
                  invert={true}
                  addon={true}
                  placeholder="Hansı oyunu axtarırsınız?"
                />
                <Input.Addon variant="primary">
                  <i className="far fa-search"></i>
                </Input.Addon>
              </Input.Group>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
