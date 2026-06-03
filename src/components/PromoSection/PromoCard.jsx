import "./style/PromoCard.css";

const PromoCard = ({ image, title, subtitle, className }) => {
  return (
    <div className={`promo-card ${className}`}>
      <img src={image} alt={title} />

      <div className="promo-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default PromoCard;