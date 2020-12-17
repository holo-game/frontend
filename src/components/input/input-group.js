import cn from "classnames";

export default function InputGroup({ children, className, ...props }) {
  return (
    <div className={cn("input-group", className)} {...props}>
      {children}
    </div>
  );
}
