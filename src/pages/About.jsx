import AboutHero from "../components/About/AboutHero/AboutHero";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Breadcrumb from "../components/About/Breadcrumb";
import OurStory from "../components/About/OurStory/OurStory";
import WhyChooseUs from "../components/About/WhyChooseUs/WhyChooseUs";
import CounterSection from "../components/About/CounterSection/CounterSection";
import HappyClients from "../components/About/HappyClients/HappyClients";

const About = () => {
  return (
    <>
      <Header />

      <AboutHero />

      <Breadcrumb />

      <OurStory />

      <WhyChooseUs />

      <HappyClients />

      <CounterSection />

      <Footer />
    </>
  );
};

export default About;