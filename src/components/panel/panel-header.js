import cn from "classnames";

export default function PanelHeader({ children, title, className, ...props }) {
  return (
    <div className={cn("panel-header", className)} {...props}>
      {title ? title : children}
    </div>
  );
}
