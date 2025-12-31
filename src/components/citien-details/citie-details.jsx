import React from "react";

const CityDetails = ({ city }) => {
  return (
    <div className="2xl:w-full xl:w-full lg:w-full md:w-[97%] sm:w-[97%] xs:w-[97%] xss:w-[97%] mobile:w-[97%] mx-auto relative rounded-lg overflow-hidden border-2 border-[#f89835] min-h-[250px] flex flex-col group">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <img
        src={city.image}
        alt={city.name}
        className="absolute inset-0 w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
      />
      <div className="relative z-20 flex flex-col justify-between h-full p-6">
        <div className="flex items-start justify-center gap-2 mt-auto">
          <svg
            className="w-5 h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-7 xs:w-7 xss:w-7 mobile:w-7 2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-7 xs:h-7 xss:h-7 mobile:h-7 text-cities-location-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h3 className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-base xss:text-base mobile:text-base font-semibold">
            {city.name}
          </h3>
        </div>
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3 mt-4">
          <button className="flex-1 bg-cities-button-color text-base text-cities-button-text w-full h-[40px] rounded-full font-semibold hover:bg-[#e8892a] transition-colors">
            Book Now
          </button>
          <button className="flex-1 bg-white border-2 border-cities-button-color text-base text-cities-button-text w-full h-[40px] rounded-full font-semibold hover:bg-[#fef7eb] transition-colors flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5 text-cities-button-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
