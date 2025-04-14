
import { Helmet } from "react-helmet";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import CategoryGrid from "../components/home/CategoryGrid";
import SeasonalProduce from "../components/home/SeasonalProduce";
import LatestTips from "../components/home/LatestTips";
import NewsletterSignup from "../components/home/NewsletterSignup";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PickPerfect.org - Learn to Pick Perfect Every Time</title>
        <meta 
          name="description" 
          content="PickPerfect.org helps you select the freshest, ripest produce every time you shop. Learn how to identify quality fruits and vegetables with our visual guides."
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <CategoryGrid />
        <SeasonalProduce />
        <LatestTips />
        <NewsletterSignup />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
