import ContactForm from "./ContactForm";
import Faq from "./Faq";

import "./style/ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-message-section">
      <div className="container">
        <div className="contact-message-wrapper">
          <ContactForm />
          <Faq />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;