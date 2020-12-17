export default function Paragraph({ icon, title }) {
  return (
    <div className="paragraph mb-4">
      {icon}
      <h2 className="paragraph-title">{title}</h2>
    </div>
  );
}
