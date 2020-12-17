import cn from "classnames";

export default function Alert({ variant, children }) {
  return (
    <div className={cn("alert", variant && `alert-${variant}`)}>
      <span>{children}</span>
    </div>
  );
}
