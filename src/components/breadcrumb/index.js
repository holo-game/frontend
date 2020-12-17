import Link from "next/link";
import cn from "classnames";

export default function Breadcrumb({ routes, className, ...props }) {
  const pages = {
    home: "Əsas Səhifə",
    games: "Oyunlar",
    banktransfer: "Balans Yüklə",
  };
  return (
    <div className={cn("breadcrumb", className)} {...props}>
      <ul>
        <li>
          <Link href="/">
            <a>{pages.home}</a>
          </Link>
        </li>
        {routes &&
          routes.map((route) => (
            <li key={route}>
              <Link href={`/${route}`}>
                <a>{pages[route]}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}