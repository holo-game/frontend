import cn from "classnames";

export default function Divider({ title, className, ...props }) {
  return (
    <div className={cn("divider", className)} {...props}>
      <span>{title}</span>
    </div>
  );
}

Divider.defaultProps = {
  className: "my-3",
};
