import Link from "next/link";
import { Button } from "../";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-brand">
            <Link href="/">
              <a>
                <img src="/images/logo.png" />
              </a>
            </Link>
          </div>
          <ul className="header-nav">
            <li>
              <Link href="/">
                <a>
                  <Button title="Qeydiyyatdan Keç" variant="default" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Button title="Daxil Ol" variant="primary" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
