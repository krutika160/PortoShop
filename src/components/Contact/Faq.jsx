import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqData } from "../../data/contactFaqData";

const Faq = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="faq-box">
      <h2>Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <div className="faq-item" key={item.id}>
          <div
            className="faq-question"
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            <h4>{item.question}</h4>

            {active === index ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>

          {active === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;