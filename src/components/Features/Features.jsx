import FeatureItem from "./FeatureItem";
import "./style/Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-wrapper">
          <FeatureItem
            type="shipping"
            title="FREE SHIPPING & RETURN"
            description="Free shipping on all orders over $99."
          />

          <FeatureItem
            type="money"
            title="MONEY BACK GUARANTEE"
            description="100% money back guarantee"
          />

          <FeatureItem
            type="support"
            title="ONLINE SUPPORT 24/7"
            description="Lorem ipsum dolor sit amet."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;