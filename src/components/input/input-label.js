import cn from "classnames";

export default function InputLabel({ children, className, ...props }) {
  return (
    <div className={cn("input-group-label", className)} {...props}>
      {children}
    </div>
  );
}
