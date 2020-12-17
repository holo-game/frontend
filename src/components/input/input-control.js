import cn from "classnames";

export default function InputControl({ addon, invert, className, ...props }) {
  return (
    <input
      type="text"
      className={cn(
        "form-control",
        addon && "with-addon",
        invert && "invert",
        className
      )}
      {...props}
    />
  );
}
