import cn from "classnames";

export default function Loading({ size, variant, className, ...props }) {
  return (
    <div
      className={cn(
        "loading",
        `loading-${size}`,
        `loading-${variant}`,
        className && className
      )}
      {...props}
    />
  );
}

Loading.defaultProps = {
  size: "md",
  variant: "warning",
};
