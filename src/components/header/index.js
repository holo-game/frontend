import Link from "next/link";
import { Button } from "../";

export default function Header({ user }) {
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
          {user ? (
            <ul className="header-nav">
              <li>
                <Button variant="warning">
                  <i className="fas fa-plus fa-xs mr-2"></i>
                  Balans <strong className="ml-2">0.00 AZN</strong>
                </Button>
              </li>
              <li>
                <Button variant="default">Sifarişlərim</Button>
              </li>
              <li>
                <Link href="/account">
                  <a>
                    <Button variant="default">
                      Salam,
                      <span className="text-one ml-1">{user.username}</span>
                    </Button>
                  </a>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="header-nav">
              <li>
                <Link href="/register">
                  <a>
                    <Button title="Qeydiyyatdan Keç" variant="default" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>
                    <Button title="Daxil Ol" variant="primary" />
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
