import "./style/ContactInfo.css";

import { contactInfoData } from "../../data/contactInfoData";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="container">
        <div className="contact-heading">
          <h2 className="story-title">Contact Info</h2>

          <p className="story-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc.L orem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

        </div>

        <div className="contact-info-grid">
          {contactInfoData.map((item) => {
            const Icon = item.icon;

            return (
              <div className="contact-card" key={item.id}>
                <div className="contact-icon">
                  <Icon />
                </div>

                <div className="contact-inner-content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                </div>

                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;