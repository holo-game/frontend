import React from "react";
import cn from "classnames";

export default function Button({
  as,
  variant,
  size,
  title,
  children,
  className,
  ...props
}) {
  const renderButton = React.createElement(
    as,
    {
      className: cn("btn", `btn-${variant}`, size && `btn-${size}`, className),
      ...props,
    },
    title ? title : children
  );
  return renderButton;
}

Button.defaultProps = {
  as: "button",
  variant: "default",
};
