import cn from "classnames";
import { NavLink, Search } from "@/components/";
import { NAVIGATION_LIST } from "@/constants";

export default function Navbar() {
  return (
    <nav className="navbar d-none d-sm-flex">
      <div className="container">
        <div className="navbar-content">
          <ul className="navbar-nav">
            {NAVIGATION_LIST.map((item, index) => (
              <li key={index}>
                <NavLink href={item.path} activeClassName="active">
                  <a>
                    <i className={cn(item.icon, item.color)}></i>
                    <span>{item.title}</span>
                  </a>
                </NavLink>
              </li>
            ))}
          </ul>
          <Search invert={true} className="d-none d-md-flex" />
        </div>
      </div>
    </nav>
  );
}
