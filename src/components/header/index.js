import Link from "next/link";
import { Button } from "../";
import { signOut } from "@/graphql/actions/auth.action";

export default function Header({ user, ...props }) {
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
                <Button
                  title="Çıxış"
                  variant="default"
                  onClick={() => signOut()}
                />
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
