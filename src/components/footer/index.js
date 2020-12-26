import Link from "next/link";
import { SOCIAL, DEVELOPER, APP_NAME } from "@/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <ul className="footer-nav">
            <li>
              <Link href="/pages/about">
                <a>Haqqımızda</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Əlaqə</a>
              </Link>
            </li>
            <li>
              <Link href="/banktransfer">
                <a>Ödəniş Metodları</a>
              </Link>
            </li>
            <li className="d-none d-sm-block">
              <Link href="/pages/agreement">
                <a>Üzvlük Müqaviləsi</a>
              </Link>
            </li>
          </ul>
          <ul className="footer-nav my-4">
            {SOCIAL.map((i) => (
              <li>
                <a href={i.url} className="btn btn-default">
                  <i className={`${i.icon} mr-3`}></i>
                  <span>{i.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="footer-copyright">
            <p className="my-0">
              Copyright 2020 {APP_NAME} | Bütün hüquqlar qorunur.
            </p>
            <p className="mb-0 mt-2">
              Developed by{" "}
              <a
                href={DEVELOPER.url}
                target="_blank"
                rel="noopener"
                className="text-one"
              >
                {DEVELOPER.title}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
