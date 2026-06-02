import { FaTruck, FaMoneyBillWave, FaHeadset } from "react-icons/fa";

const FeatureItem = ({ type, title, description }) => {
  const icons = {
    shipping: <FaTruck />,
    money: <FaMoneyBillWave />,
    support: <FaHeadset />,
  };

  return (
    <div className="feature-item">
      <div className="feature-icon">
        {icons[type]}
      </div>

      <div className="feature-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;