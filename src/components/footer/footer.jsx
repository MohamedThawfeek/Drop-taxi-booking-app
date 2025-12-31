import React from "react";
import Json from "../../utils/statictest.json";
const Footer = () => {
  return (
    <footer className="w-full bg-footer-background text-footer-text">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 xss:grid-cols-2 mobile:grid-cols-2 gap-8">
          {/* Column 1: Drop Taxi Trip */}
          <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 xs:col-span-2 xss:col-span-2 mobile:col-span-2">
            <h3 className="text-xl font-bold mb-4">
                
              {Json["footer-section"].title}
            </h3>
            <p className="text-sm leading-relaxed">
              {Json["footer-section"].description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 xs:col-span-1 xss:col-span-1 mobile:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              {Json["footer-section"].quickLinkTitle}
            </h3>
            {Json["footer-section"]["quick-links"].map((link, index) => (
              <p key={index} className="text-sm hover:underline my-3">
                <a href={link.path}>{link.label}</a>
              </p>
            ))}
          </div>

          <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 xs:col-span-1 xss:col-span-1 mobile:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              {Json["footer-section"].servicetitle}
            </h3>
            {Json["footer-section"]["service"].map((link, index) => (
              <p key={index} className="text-sm hover:underline my-3">
                <a href={link.path}>{link.label}</a>
              </p>
            ))}
          </div>

          {/* Column 4: Service Areas */}
          <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 xs:col-span-2 xss:col-span-2 mobile:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              {Json["footer-section"].serviceAreasTitle}
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {Json["footer-section"].services.map((service, index) => (
                <p key={index} className="text-sm hover:underline">
                  <a href={service.path}>{service.label}</a>
                </p>
              ))}
            </div>
          </div>

          {/* Column 5: Contact Info */}
          <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 xs:col-span-2 xss:col-span-2 mobile:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              {Json["footer-section"]["contact-info-title"]}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
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
                <span className="text-sm">
                  {Json["footer-section"]["contact-info"][0].label}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
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
                <a
                  href={`tel:${Json["footer-section"]["contact-info"][1].number}`}
                  className="text-sm hover:underline"
                >
                  {Json["footer-section"]["contact-info"][1].label}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${Json["footer-section"]["contact-info"][2].label}`}
                  className="text-sm hover:underline"
                >
                  {Json["footer-section"]["contact-info"][2].label}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex  2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col xss:flex-col mobile:flex-col justify-between items-center gap-4 text-sm">
            <div>{Json["footer-section"].copyright}</div>
            <div className="text-center">
              {Json["footer-section"]["netbix-technologies"]}
            </div>
            <div className="flex gap-4">
              <a href="/privacy-policy" className="hover:underline">
                {Json["footer-section"]["privacy-policy"]}
              </a>
              <a href="/terms-of-service" className="hover:underline">
                {Json["footer-section"]["terms-of-service"]}
              </a>
              <a href="/cancellation-policy" className="hover:underline">
                {Json["footer-section"]["cancellation-policy"]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
