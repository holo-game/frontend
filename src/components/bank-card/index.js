export default function BankCard({ image, bank, cardNumber, accountHolder }) {
  return (
    <div className="bank-card card card-hoverable">
      <div className="bank-card-image">
        <img src={image} />
      </div>
      <div className="bank-card-content">
        <ul>
          <li>
            <strong>Bank</strong>
            <p>{bank}</p>
          </li>
          <li>
            <strong>Kart Nömrəsi</strong>
            <p>{cardNumber}</p>
          </li>
          <li>
            <strong>Hesab Sahibi</strong>
            <p>{accountHolder}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
