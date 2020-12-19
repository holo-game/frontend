import cn from "classnames";

export default function Alert({ variant, children, size, className }) {
  return (
    <div
      className={cn(
        "alert",
        variant && `alert-${variant}`,
        size && `alert-${size}`,
        className && className
      )}
    >
      <span>{children}</span>
    </div>
  );
}
