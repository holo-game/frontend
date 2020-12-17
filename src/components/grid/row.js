export default function Row({ children, className, ...props }) {
  return (
    <div className={`row ${className}`} {...props}>
      {children}
    </div>
  );
}
