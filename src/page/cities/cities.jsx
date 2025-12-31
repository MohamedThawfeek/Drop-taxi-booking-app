import React from "react";
import Navbar from "../../components/navbar/navbar";
import Cities from "../../components/cities/cities";
import Footer from "../../components/footer/footer";

const CitiesPage = () => {
  return (
    <div className="w-full h-dvh bg-white">
      <Cities />
      <Footer />
    </div>
  );
};

export default CitiesPage;
