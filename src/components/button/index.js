import React from "react";
import cn from "classnames";

export default function Button({
  as = "button",
  variant = "default",
  title,
  children,
  className,
  ...props
}) {
  const renderButton = React.createElement(
    as,
    { className: cn("btn", `btn-${variant}`, className), ...props },
    title ? title : children
  );
  return renderButton;
}
