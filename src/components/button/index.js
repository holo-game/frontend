import React from "react";
import cn from "classnames";

export default function Button({
  as,
  variant,
  size,
  title,
  loading,
  children,
  className,
  ...props
}) {
  const renderButton = React.createElement(
    as,
    {
      className: cn(
        "btn",
        `btn-${variant}`,
        size && `btn-${size}`,
        loading && `btn-loading`,
        className && className
      ),
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
