import { Button, Image } from "../";

export default function GameCard({ image, title }) {
  return (
    <div className="game-card">
      <a href="#">
        <div className="game-card-image">
          <Image src={image} alt={title} />
          <div className="game-card-overlay">
            <Button title="UC satın al" variant="warning" />
          </div>
        </div>
        <div className="game-card-content">
          <strong>{title}</strong>
        </div>
      </a>
    </div>
  );
}
