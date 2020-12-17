export default function Col({ children, className, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
