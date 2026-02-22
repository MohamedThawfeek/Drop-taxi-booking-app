import React, { Suspense } from "react";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import Cars from "../../components/cars/cars";
import SEO from "../../components/seo/SEO";

// Lazy-load non-critical/below-the-fold components
const About = React.lazy(() => import("../../components/about/about"));
const Cities = React.lazy(() => import("../../components/cities/cities"));
const Footer = React.lazy(() => import("../../components/footer/footer"));

const Home = () => {
  return (
    <div className="w-full h-dvh bg-white">
      <SEO
        title="Drop Taxi Trip - Your Trusted One Way & Drop Taxi Service"
        description="Reliable drop taxi services connecting major cities across Tamil Nadu, Bengaluru, and Pondicherry. Affordable, safe, and convenient intercity travel."
        keywords="drop taxi, one way taxi, taxi booking, intercity taxi, Tamil Nadu taxi, Bengaluru taxi, Pondicherry taxi"
      />
      <Hero />
      <Cars />
      <Suspense fallback={null}>
        <About />
        <Cities />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
