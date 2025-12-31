import React from "react";

const AboutCertificate = ({ feature }) => {
  return (
    <div className="2xl:w-full xl:w-full lg:w-full md:w-[97%] sm:w-[97%] xs:w-[97%] xss:w-[97%] mobile:w-[97%] mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      {/* Icon Circle */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-about-icon-background flex items-center justify-center mb-4 text-about-icon">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-lg font-bold text-about-title mb-3">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

export default AboutCertificate;
