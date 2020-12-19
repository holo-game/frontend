import { Image } from "../";

export default function BankCard({
  image,
  bankName,
  cardNumber,
  accountHolder,
}) {
  return (
    <div className="bank-card card card-hoverable">
      <div className="bank-card-image">
        <Image src={image} alt={bankName} />
      </div>
      <div className="bank-card-content">
        <ul>
          <li>
            <strong>Bank</strong>
            <p>{bankName}</p>
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
