import React from "react";
import Json from "../../utils/statictest.json";
import CarDetails from "../car-details/car-details";

const Cars = () => {
  const cars = Json.cars;
 
  return (
    <div className="w-full min-h-dvh bg-cars-background py-10">
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-6xl md:w-full sm:w-full mx-auto flex flex-col items-center justify-center gap-4">
        <h1 className="text-cars-text text-4xl md:text-5xl font-bold text-center">
          {Json["cars-section"].title}
        </h1>
        <p className="text-cars-text text-lg md:text-xl max-w-4xl mx-auto px-2 text-center">
          {Json["cars-section"].description}
        </p>

        <div className="2xl:w-full xl:w-full lg:w-full md:w-[97%] sm:w-[97%] xs:w-[97%] xss:w-[97%] mobile:w-[97%] mx-auto grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">
          {cars.map((car, index) => (
            <CarDetails key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
