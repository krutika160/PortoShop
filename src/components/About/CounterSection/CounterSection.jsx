import "./style/CounterSection.css";
import { counterData } from "../../../data/counterData";

const CounterSection = () => {
  return (
    <section className="counter-section">
      <div className="container">
        <div className="counter-grid">
          {counterData.map((item) => (
            <div
              className="counter-card"
              key={item.id}
            >
              <h2>{item.number}</h2>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;