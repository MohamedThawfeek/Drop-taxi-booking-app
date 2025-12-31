import React, { useState, useRef, useEffect } from "react";
import Json from "../../utils/statictest.json";

const Form = () => {
  const dropOffDateRef = useRef(null);
  const pickUpDateRef = useRef(null);
  const pickUpTimeRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    tripType: "One Way",
    pickUpLocation: "",
    dropOffLocation: "",
    phoneNumber: "",
    pickUpDate: new Date().toLocaleDateString(),
    pickUpTime: new Date().toLocaleTimeString(),
    dropOffDate: new Date().toLocaleDateString(),
  });

  const tripTypeOptions = ["One Way", "Round Trip"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTripTypeSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      tripType: value,
    }));
    setIsDropdownOpen(false);
  };

  return (
    <div className="2xl:w-full xl:w-full lg:w-full md:w-[97%] sm:w-[97%] xs:w-[97%] xss:w-[97%] mobile:w-[97%] overflow-hidden mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Banner */}
        <div className="bg-form-header-background text-form-header-text rounded-t-2xl w-full h-[80px] flex items-center justify-center">
          <h2 className="text-2xl font-bold text-center ">
            {Json["hero-section"]["form-title"]}
          </h2>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-4">
          {/* Trip Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trip Type
            </label>
            <div className="relative" ref={dropdownRef}>
              {/* Custom Dropdown Button */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-amber-50 border border-amber-200 rounded-lg p-3  text-gray-700 text-left flex items-center justify-between outline-none "
              >
                <span>{formData.tripType}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Custom Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-amber-200 rounded-lg shadow-lg overflow-hidden">
                  {tripTypeOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleTripTypeSelect(option)}
                      className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                        formData.tripType === option
                          ? "bg-orange-500 text-white"
                          : "bg-amber-50 text-gray-700 hover:bg-amber-100"
                      }`}
                    >
                      <span>{option}</span>
                      {formData.tripType === option && (
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
            {/* Pick-up Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pick-up Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
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
                <input
                  type="text"
                  name="pickUpLocation"
                  value={formData.pickUpLocation}
                  onChange={handleChange}
                  placeholder="Start typing location"
                  className="w-full bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 pl-10 text-gray-700 placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Drop-off Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Drop-off Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
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
                <input
                  type="text"
                  name="dropOffLocation"
                  value={formData.dropOffLocation}
                  onChange={handleChange}
                  placeholder="Enter destination"
                  className="w-full bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 pl-10 text-gray-700 placeholder-gray-400 outline-none "
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
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
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 pl-10 text-gray-700 placeholder-gray-400 outline-none "
                />
              </div>
            </div>

            {/* Pick-up Date */}
            <div className="w-full min-w-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pick-up Date <span className="text-red-500">*</span>
              </label>

              <div className="relative w-full min-w-0">
                <input
                  ref={pickUpDateRef}
                  type="date"
                  name="pickUpDate"
                  placeholder="Select pick-up date"
                  value={formData.pickUpDate}
                  onChange={handleChange}
                  className="
        w-full min-w-0 box-border
        bg-amber-50 border border-amber-200
        rounded-lg px-4 pr-10
        text-gray-700 outline-none
        min-h-[50px] 
        appearance-none
        [&::-webkit-calendar-picker-indicator]:hidden
      "
                />

                <svg
                  onClick={() =>
                    pickUpDateRef.current?.showPicker?.() ||
                    pickUpDateRef.current?.click()
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Pick-up Time */}
            <div className="w-full min-w-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pick-up Time
              </label>

              <div className="relative w-full min-w-0">
                <input
                  ref={pickUpTimeRef}
                  type="time"
                  name="pickUpTime"
                  placeholder="Select pick-up time"
                  value={formData.pickUpTime}
                  onChange={handleChange}
                  className="
        w-full min-w-0 box-border
        bg-amber-50 border border-amber-200
        rounded-lg px-4 pr-10
        text-gray-700 outline-none
        min-h-[50px]        appearance-none
        [&::-webkit-calendar-picker-indicator]:hidden
      "
                />

                <svg
                  onClick={() =>
                    pickUpTimeRef.current?.showPicker?.() ||
                    pickUpTimeRef.current?.click()
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Drop-off Date */}

            {formData.tripType === "Round Trip" && (
              <div className="w-full min-w-0">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Drop-off Date <span className="text-red-500">*</span>
                </label>

                <div className="relative w-full min-w-0">
                  <input
                    ref={dropOffDateRef}
                    type="date"
                    name="dropOffDate"
                    placeholder="Select drop-off date"
                    value={formData.dropOffDate}
                    onChange={handleChange}
                    className="
          w-full min-w-0 box-border
          bg-amber-50 border border-amber-200
          rounded-lg px-4 pr-10
          text-gray-700 outline-none
          min-h-[50px] 
          appearance-none
          [&::-webkit-calendar-picker-indicator]:hidden
        "
                  />

                  <svg
                    onClick={() =>
                      dropOffDateRef.current?.showPicker?.() ||
                      dropOffDateRef.current?.click()
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <p className="text-sm text-gray-500 text-center">
            {Json["hero-section"]["form-title-highlight"]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
