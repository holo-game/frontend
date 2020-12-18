import cn from "classnames";

export default function PanelWrapper({ children, className, ...props }) {
  return (
    <div className={cn("panel", "card", className)} {...props}>
      {children}
    </div>
  );
}
