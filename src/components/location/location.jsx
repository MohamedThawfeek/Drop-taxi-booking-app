import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Location = ({ pickUpLocation, dropOffLocation }) => {
  const [location, setLocation] = useState([]);
  const [location2, setLocation2] = useState([])

  useEffect(() => { 
    const fetchLocation = async () => {
      if (
        (pickUpLocation && pickUpLocation.trim() !== "") ||
        (dropOffLocation && dropOffLocation.trim() !== "")
      ) {
        try {
          const response = await axios.post(
            "https://password-manager-backend-delta.vercel.app/get-locations",
            { search: pickUpLocation.trim() || dropOffLocation.trim() }
          );
          if (pickUpLocation.trim() !== "") {
            setLocation(response.data.data.locations);
            return

          } else if (dropOffLocation.trim() !== "") {
            setLocation2(response.data.data.locations);
            return

          }
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      }
    };
    fetchLocation();
  }, [pickUpLocation, dropOffLocation]);

  return {
    location,
    location2,
    setLocation,
    setLocation2,
  };
};

export default Location;
