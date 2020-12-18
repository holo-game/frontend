import cn from "classnames";

export default function Container({ children, narrow, className, ...props }) {
  return (
    <div
      className={cn(narrow ? "container-narrow" : "container", className)}
      {...props}
    >
      {children}
    </div>
  );
}
