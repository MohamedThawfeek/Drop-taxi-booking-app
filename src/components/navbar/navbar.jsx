import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Json from "../../utils/statictest.json";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full bg-navbar-background">
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-6xl md:w-full sm:w-full mx-auto h-[100px] md:h-[105px] sm:h-[70px] flex items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="w-[130px] md:w-[192px] sm:w-[90px] h-[100px] md:h-[79px] sm:h-[70px] flex items-center justify-center">
          <img src={Logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <nav className="flex-1 hidden lg:flex items-center justify-center gap-10">
          {Json.Navbar.navItems.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => navigate(item.path)}
                className="text-navbar-text text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
              >
                {item.label}
              </p>
            );
          })}
        </nav>
        <a
          href={`tel:${Json.Navbar.contact.replace(/\s+/g, "")}`}
          className="hidden lg:flex text-navbar-button-text bg-navbar-button-color w-[180px] h-[40px] rounded-md items-center justify-center text-base hover:opacity-90 transition-opacity"
        >
          {Json.Navbar.contact}
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-navbar-text transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-navbar-text transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-navbar-text transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden bg-navbar-background border-t border-navbar-text/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-4">
          {Json.Navbar.navItems.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  navigate(item.path);
                  setIsMobileMenuOpen(false);
                }}
                className="text-navbar-text text-sm font-medium cursor-pointer py-2 hover:opacity-80 transition-opacity"
              >
                {item.label}
              </p>
            );
          })}
          <a
            href={`tel:${Json.Navbar.contact.replace(/\s+/g, "")}`}
            className="text-navbar-button-text bg-navbar-button-color w-full h-[40px] rounded-md flex items-center justify-center text-base mt-2 hover:opacity-90 transition-opacity"
          >
            {Json.Navbar.contact}
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
