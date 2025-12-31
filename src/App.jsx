import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/home";
import Booking from "./page/booking/booking";
import Service from "./page/service/service";
import Tariff from "./page/tariff/tariff";
import CitiesPage from "./page/cities/cities";
import Navbar from "./components/navbar/navbar";
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
