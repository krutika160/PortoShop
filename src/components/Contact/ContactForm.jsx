const ContactForm = () => {
  return (
    <div className="contact-form-box">
      <h2>Send Us a Message</h2>

      <form>
        <div className="form-group">
          <label>
            Your Name <span>*</span>
          </label>

          <input
            type="text"
            name="name"
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label>
            Your E-mail <span>*</span>
          </label>

          <input
            type="email"
            name="email"
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label>
            Your Message <span>*</span>
          </label>

          <textarea
            name="message"
            rows="8"
            placeholder=""
          ></textarea>
        </div>

       <a href="#" class="main-btn">SEND MESSAGE</a>
      </form>
    </div>
  );
};

export default ContactForm;