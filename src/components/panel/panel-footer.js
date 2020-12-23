import cn from "classnames";

export default function PanelFooter({ children, title, className, ...props }) {
  return (
    <div className={cn("panel-footer", className)} {...props}>
      {title ? title : children}
    </div>
  );
}
