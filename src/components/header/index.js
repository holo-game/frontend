import Link from "next/link";
import { Button } from "../";

export default function Header({ user }) {
  const balance = parseFloat(user?.balance).toFixed(2);
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
                <Link href="/banktransfer">
                  <a>
                    <Button variant="warning">
                      <i className="fas fa-plus fa-xs mr-2"></i>
                      Balans <strong className="ml-2">{balance} AZN</strong>
                    </Button>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/account/orders">
                  <a>
                    <Button variant="default">Sifarişlərim</Button>
                  </a>
                </Link>
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
