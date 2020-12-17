export default function GameCard({ image, title }) {
  return (
    <div className="game-card">
      <a href="#">
        <div className="game-card-image">
          <img src={image} alt={title} />
          <div className="game-card-overlay">
            <button className="btn btn-warning">UC satın al</button>
          </div>
        </div>
        <div className="game-card-content">
          <strong>{title}</strong>
        </div>
      </a>
    </div>
  );
}
