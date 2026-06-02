import "./style/HerBanner.css";

import HeroBanner from "./HeroBanner";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section className="category-banner container">

      <HeroBanner />

      <HeroSlider />

    </section>
  );
}

export default Hero;