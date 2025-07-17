import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import Support from "../components/Support";
import Tool from "../components/Tool";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <Tool />
      <FaqSection />
      <Support /> 
      <Footer />
    </div>
  );
};

export default Home;
