import "./style/AboutHero.css";

const AboutHero = () => {
  return (
    <section
      className="about-hero"
    
    >
      <div className="about-hero-overlay">
        <div className="container">
          <span className="about-subtitle">
            WELCOME TO LENSPLUS
          </span>

          <h1>About Us</h1>

          <p>
            Discover our journey, values, and commitment to providing
            premium eyewear and exceptional customer experiences.
          </p>

          <div className="about-breadcrumb">
            Home / About Us
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;