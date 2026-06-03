import PromoCard from "./PromoCard";
import "./style/PromoSection.css";
import promoData from "../../data/promoData";

const PromoSection = () => {
  return (
    <div className="container">
      <section className="promo-section">

        <div className="left-column">
          {promoData.leftColumn.map((item) => (
            <PromoCard
              key={item.id}
              className={item.className}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>

        <div className="middle-column">
          {promoData.middleColumn.map((item) => (
            <PromoCard
              key={item.id}
              className={item.className}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>

        <div className="right-column">
          {promoData.rightColumn.map((item) => (
            <PromoCard
              key={item.id}
              className={item.className}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>

      </section>
    </div>
  );
};

export default PromoSection;