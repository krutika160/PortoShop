import "./style/AboutHero.css";
import aboutBg from "../../../assets/images/page-header-bg.jpg";

const AboutHero = () => {
  return (
    <section
      className="about-hero"
      style={{
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
      <div className="about-hero-section">
        <div className="container">
          <span className="about-subtitle">
            About Us
          </span>
          <h1>Our Company</h1>
          <a href="#" className="main-btn">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;