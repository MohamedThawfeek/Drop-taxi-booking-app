import React from "react";
import HeroImage from "../../assets/hero.png";
import Json from "../../utils/statictest.json";
import Form from "../form/form";

const Hero = () => {
  return (
    <div
      id="booking"
      className="w-full min-h-dvh relative flex items-center justify-center 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:py-2 xs:py-2 xss:py-2 mobile:py-2"
    >
      {/* LCP image: use an actual img so the browser can prioritize and preload it */}
      <img
        src={HeroImage}
        alt=""
        aria-hidden="true"
        loading="eager"
        width="1600"
        height="900"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-6xl md:w-full sm:w-full grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 z-20 items-center justify-center">
        <div className="w-full mx-auto flex 2xl:items-start xl:items-start lg:items-start md:items-center sm:items-center xs:items-center xss:items-center mobile:items-center flex-col text-hero-title font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl xs:text-xl xss:text-xl mobile:text-xl gap-1 py-10">
          <p className=" ">{Json["hero-section"].title}</p>
          <p className=" ">
            {Json["hero-section"].title1}{" "}
            <span className="text-hero-title-highlight">
              {Json["hero-section"]["title-highlight"]}
            </span>{" "}
            {Json["hero-section"].title2}
          </p>
          <a
            href={`tel:${Json.Navbar.contact.replace(/\s+/g, "")}`}
            className="text-hero-button-text bg-hero-button-color w-[200px] h-[40px] rounded-full flex items-center justify-center text-base hover:opacity-90 transition-opacity text-center mt-5 "
          >
            {Json.Navbar.contact}
          </a>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Hero;
