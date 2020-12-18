import cn from "classnames";

export default function PanelBody({ children, className, ...props }) {
  return (
    <div className={cn("panel-body", className)} {...props}>
      {children}
    </div>
  );
}
