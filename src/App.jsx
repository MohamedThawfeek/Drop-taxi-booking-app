import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/home.jsx";
import Booking from "./page/booking/booking.jsx";
import Service from "./page/service/service.jsx";
import Tariff from "./page/tariff/tariff.jsx";
import CitiesPage from "./page/cities/cities.jsx";
import Navbar from "./components/navbar/navbar.jsx";
const App = () => {
  return (
    <div className="w-full h-dvh bg-white">
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/our-service" element={<Service />} />
          <Route path="/tariff" element={<Tariff />} />
          <Route path="/cities" element={<CitiesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
