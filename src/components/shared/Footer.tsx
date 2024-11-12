import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-neutrals-light dark:bg-primary-dark dark:text-neutrals-light py-10">
      <div className="max-w-6xl mx-auto px-4 md:flex md:justify-between">
        {/* Brand Section */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-secondary-dark rounded-full"></div>
            <h2 className="text-2xl font-bold text-neutrals-light dark:text-neutrals-light">
              SaasUI
            </h2>
          </div>
          <p className="mt-4 text-primary-muted dark:text-neutrals-light">
            Empowering developers with beautifully crafted, customizable UI
            components.{" "}
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          <div>
            <h3 className="text-lg font-semibold text-neutrals-light dark:text-neutrals-light mb-2">
              Components
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutrals-light dark:text-neutrals-light mb-2">
              Socials
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutrals-light dark:text-neutrals-light mb-2">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-primary-light pt-6 text-center text-sm text-primary-muted dark:text-neutrals-light">
        <p>&copy; 2024 Shiwangi Kumari. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-primary-muted hover:text-secondary-dark dark:hover:text-secondary-light"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
