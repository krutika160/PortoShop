import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import PromoSection from "../components/PromoSection/PromoSection";
import BrandSlider from "../components/BrandSlider/BrandSlider";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";



const Home = () => {
  return (
    <>
      <Header />

      <Hero />

      <Features /> 

      <PromoSection />  

      <FeaturedProducts /> 

      <BrandSlider /> 

      <Footer />
    </>
  );
};

export default Home;