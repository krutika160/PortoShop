import "./style/WhyChooseUs.css";
import { whyChooseUsData } from "../../../data/whyChooseUsData";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="section-title story-title">
          WHY CHOOSE US
        </h2>

        <div className="choose-grid">
          {whyChooseUsData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="choose-card"
                key={item.id}
              >
                <Icon className="choose-icon" />

                <div className="choose-content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;