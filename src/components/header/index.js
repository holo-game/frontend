import Link from "next/link";

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
              <a href="#" className="btn btn-default">
                Qeydiyyatdan Keç
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-primary">
                Daxil Ol
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
