import Link from "next/link";
import cn from "classnames";

export default function Error({ title, image, className, ...props }) {
  return (
    <div className={cn("error", className && className)} {...props}>
      <img src={image} width={200} />
      <h2>{title}</h2>
      <Link href="/">
        <a className="btn btn-primary">Əsas Səhifə</a>
      </Link>
    </div>
  );
}
