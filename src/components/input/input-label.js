import cn from "classnames";

export default function InputLabel({ children, className, ...props }) {
  return (
    <label className={cn("input-group-label", className)} {...props}>
      {children}
    </label>
  );
}
