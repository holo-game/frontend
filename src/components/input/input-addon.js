import cn from "classnames";

export default function InputGroup({ children, variant, className, ...props }) {
  return (
    <button
      className={cn(
        "input-group-addon",
        variant && `btn-${variant}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
