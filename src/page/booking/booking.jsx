import React from "react";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import Cars from "../../components/cars/cars";
import Footer from "../../components/footer/footer";

const Booking = () => {
  return (
    <div className="w-full h-dvh bg-white">
      <Hero />
      <Cars />
      <Footer />
    </div>
  );
};

export default Booking;
