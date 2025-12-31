import React from "react";
import Json from "../../utils/statictest.json";
import Img1 from "../../assets/cities/Mysore.webp";
import Img2 from "../../assets/cities/Bangalor.webp";
import Img3 from "../../assets/cities/Bannerghatta.jpg";
import Img4 from "../../assets/cities/Bangalore ISKCON Temple.jpg";
import Img5 from "../../assets/cities/bangalore pic.jpg";
import Img6 from "../../assets/cities/Bangalore-Vidhana-Soudha.jpg";
import Img7 from "../../assets/cities/Ramanathapuram.webp";
import CityDetails from "../citien-details/citie-details";

const Cities = () => {
  const cities = [
    {
      name: "Book drop taxi in karnataka",
      image: Img1,
    },
    {
      name: "Book drop taxi in Bengaluru",
      image: Img2,
    },
    {
      name: "Book drop taxi in Bannerghatta",
      image: Img3,
    },
    {
      name: "Book drop taxi in Bangalore ISKCON Temple",
      image: Img4,
    },
    {
      name: "Book drop taxi in Bangalore Picture",
      image: Img5,
    },
    {
      name: "Book drop taxi in Bangalore Vidhana Soudha",
      image: Img6,
    },
    {
      name: "Book drop taxi in Rameswaram",
      image: Img7,
    },
  ];
  return (
    <div className="w-full min-h-[600px] bg-cities-background py-10 ">
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-6xl md:w-full sm:w-full mx-auto flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl font-bold">
          {Json["cities-section"].title}
        </h1>
        <p className="text-center text-lg">
          {Json["cities-section"].description}
        </p>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full mt-10">
          {cities.map((city, index) => {
            return <CityDetails key={index} city={city} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cities;
