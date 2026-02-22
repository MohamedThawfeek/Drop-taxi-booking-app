import React, { useState, useRef, useEffect } from "react";
import Json from "../../utils/statictest.json";
import Location from "../location/location";

const Form = () => {
  const dropOffDateRef = useRef(null);
  const pickUpDateRef = useRef(null);
  const pickUpTimeRef = useRef(null);
  const dropdownRef = useRef(null);
  const carDropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCarDropdownOpen, setIsCarDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    tripType: "One Way",
    pickUpLocation: "",
    dropOffLocation: "",
    phoneNumber: "",
    pickUpDate: new Date().toLocaleDateString(),
    pickUpTime: new Date().toLocaleTimeString(),
    dropOffDate: new Date().toLocaleDateString(),
    price: 0,
  });
  const [search, setsearch] = useState("");
  const [setseacrch2, setsetseacrch2] = useState("");
  const [dropdownLocation, setDropdownLocation] = useState(false);
  const [dropdownLocation2, setDropdownLocation2] = useState(false);
  const { location, location2, setLocation, setLocation2 } = Location({
    pickUpLocation: search,
    dropOffLocation: setseacrch2,
  });
  const [geocode, setgeocode] = useState(null);
  const [geocode1, setgeocode1] = useState(null);
  const [kilometer, setKilometer] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (location && location?.length > 0) {
      setDropdownLocation(location?.length > 0 ? true : false);
    }
    if (location2 && location2?.length > 0) {
      setDropdownLocation2(location2?.length > 0 ? true : false);
    }
  }, [location, location2]);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        carDropdownRef.current &&
        !carDropdownRef.current.contains(event.target)
      ) {
        setIsCarDropdownOpen(false);
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

  const getDistanceInKM = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;

    const R = 6371; // Earth radius in KM
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Number((R * c).toFixed(2)); // KM (2 decimals)
  };

  useEffect(() => {
    if (geocode && geocode1) {
      const KM = getDistanceInKM(
        geocode.lat,
        geocode.lng,
        geocode1.lat,
        geocode1.lng,
      );
      const Totalkilometer = Math.round(KM);
      setKilometer(Totalkilometer);
      setFormData((prev) => ({
        ...prev,
        price:
          Totalkilometer *
          (formData?.tripType === "One Way"
            ? selectedCar?.oneWayPrice
            : selectedCar?.roundTripPrice),
      }));
    }
  }, [geocode, geocode1, selectedCar]);

  console.log(formData);

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
                className="w-full bg-form-input-background border border-form-input-border  rounded-lg p-3  text-gray-700 text-left flex items-center justify-between outline-none "
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
                <div className="absolute z-50 w-full mt-1 bg-white border border-form-input-border rounded-lg shadow-lg overflow-hidden">
                  {tripTypeOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        console.log(option);
                        handleTripTypeSelect(option);
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                        formData.tripType === option
                          ? "bg-form-button-color text-form-button-text"
                          : "bg-form-input-background text-gray-700 hover:bg-form-input-background"
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Car Type
            </label>
            <div className="relative" ref={carDropdownRef}>
              {/* Custom Dropdown Button */}
              <button
                type="button"
                onClick={() => setIsCarDropdownOpen(!isCarDropdownOpen)}
                className="w-full bg-form-input-background border border-form-input-border  rounded-lg p-3  text-gray-700 text-left flex items-center justify-between outline-none "
              >
                <span>
                  {selectedCar ? selectedCar.name : "Select Car"}{" "}
                  {selectedCar && (
                    <span className={`text-[11px] text-[#8b8888]`}>
                      {formData.tripType === "One Way"
                        ? `₹${selectedCar?.oneWayPrice}/KM ${Json["cars-section"]["one-way"]}`
                        : `₹${selectedCar?.roundTripPrice}/KM ${Json["cars-section"]["round-trip"]}`}
                    </span>
                  )}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    isCarDropdownOpen ? "rotate-180" : ""
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
              {isCarDropdownOpen && (
                <div className="absolute z-50 w-full max-h-[200px] overflow-y-auto mt-1 bg-white border border-form-input-border rounded-lg shadow-lg overflow-hidden">
                  {Json.cars.map((car) => (
                    <button
                      key={car.name}
                      type="button"
                      onClick={() => {
                        setSelectedCar(car);
                        setIsCarDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                        selectedCar === car
                          ? "bg-form-button-color text-form-button-text"
                          : "bg-form-input-background text-gray-700 hover:bg-form-input-background"
                      }`}
                    >
                      <span>
                        {car.name}{" "}
                        <span
                          className={`text-[11px] ${selectedCar === car ? "text-form-button-text" : "text-[#8b8888]"}`}
                        >
                          (₹{car.oneWayPrice}/KM{" "}
                          {Json["cars-section"]["one-way"]}) - (₹
                          {car.roundTripPrice}/KM{" "}
                          {Json["cars-section"]["round-trip"]})
                        </span>
                      </span>
                      {selectedCar === car && (
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
                  value={search.length > 0 ? search : formData.pickUpLocation}
                  onChange={(e) => setsearch(e.target.value)}
                  placeholder="Start typing location"
                  className="w-full bg-form-input-background border border-form-input-border rounded-lg px-4 py-3 pl-10 text-gray-700 placeholder-gray-400 outline-none"
                />

                {search.length > 0 && (
                  <p
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setsearch("")}
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </p>
                )}

                {search.length > 0 &&
                  location &&
                  location?.length > 0 &&
                  dropdownLocation && (
                    <div className="absolute top-[110%] left-0 w-full h-[250px] overflow-y-auto bg-white shadow-lg rounded-lg py-2 border border-form-input-border z-40 flex flex-col gap-2">
                      {location?.map((item) => (
                        <div
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              pickUpLocation: item.name,
                            }));
                            setLocation([]);
                            setDropdownLocation(false);
                            setsearch("");
                            setgeocode(item.coordinates);
                          }}
                          className="hover:bg-[#d3d3d3] px-2 py-1 cursor-pointer"
                          key={item.place_id}
                        >
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            {item.formatted_address}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
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
                  value={
                    setseacrch2.length > 0
                      ? setseacrch2
                      : formData.dropOffLocation
                  }
                  onChange={(e) => setsetseacrch2(e.target.value)}
                  placeholder="Enter destination"
                  className="w-full bg-form-input-background border border-form-input-border rounded-lg px-4 py-3 pl-10 text-gray-700 placeholder-gray-400 outline-none "
                />

                {setseacrch2.length > 0 && (
                  <p
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setsetseacrch2("")}
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </p>
                )}

                {setseacrch2.length > 0 &&
                  location2 &&
                  location2?.length > 0 &&
                  dropdownLocation2 && (
                    <div className="absolute top-[110%] left-0 w-full h-[250px] overflow-y-auto bg-white shadow-lg rounded-lg py-2 border border-form-input-border z-40 flex flex-col gap-2">
                      {location2?.map((item) => (
                        <div
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              dropOffLocation: item.name,
                            }));
                            setLocation2([]);
                            setDropdownLocation2(false);
                            setsetseacrch2("");
                            setgeocode1(item.coordinates);
                          }}
                          className="hover:bg-[#d3d3d3] px-2 py-1 cursor-pointer"
                          key={item.place_id}
                        >
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            {item.formatted_address}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
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
                  minLength={10}
                  maxLength={10}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full bg-form-input-background border border-form-input-border rounded-lg px-4 py-3 pl-10 text-gray-700 placeholder-gray-400 outline-none "
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
        bg-form-input-background border border-form-input-border
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
        bg-form-input-background border border-form-input-border
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
          bg-form-input-background border border-form-input-border
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

          <button
            disabled={
              !selectedCar ||
              !formData.pickUpLocation ||
              !formData.dropOffLocation ||
              !formData.phoneNumber ||
              !formData.pickUpDate ||
              !formData.pickUpTime ||
              !formData.dropOffDate
            }
            className="w-full bg-form-button-color text-form-button-text rounded-lg px-4 py-3 text-center disabled:bg-gray-400 disabled:text-gray-600"
          >
            Book Now{" "}
            {selectedCar ? `₹${Number(formData.price).toFixed(2)}` : ""}
          </button>
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
