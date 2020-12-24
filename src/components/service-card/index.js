import cn from "classnames";

export default function ServiceCard({ iconColor, title, icon, paragraph }) {
  return (
    <div className="service-card card card-hoverable">
      <div className={cn("service-card-icon", iconColor)}>{icon}</div>
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
