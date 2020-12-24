import { Button, Image } from "../";

export default function GameCard({ image, title, isOverlay }) {
  return (
    <div className="game-card">
      <div className="game-card-image">
        <Image src={image} alt={title} />
        {isOverlay && (
          <div className="game-card-overlay">
            <Button title="UC satın al" variant="warning" />
          </div>
        )}
      </div>
      <div className="game-card-content">
        <strong>{title}</strong>
      </div>
    </div>
  );
}

GameCard.defaultProps = {
  isOverlay: true,
};
