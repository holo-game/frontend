import Link from "next/link";
import Image from "next/image";
import { Button } from "../";
import { APP_NAME } from "@/constants";

export default function Header({ user }) {
  const balance = parseFloat(user?.balance).toFixed(2);
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-brand">
            <Link href="/">
              <a aria-label={APP_NAME}>
                <Image
                  src="/images/logo.png"
                  alt={APP_NAME}
                  width="140px"
                  height="52px"
                />
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
                  <a arial-label="Qeydiyyatdan Keç">
                    <Button title="Qeydiyyatdan Keç" variant="default" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a arial-label="Daxil Ol">
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
