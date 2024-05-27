import React from "react";

function Footer() {
  return (
    <div className=" border-t border-gray-600 bg-gray-800">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className=" flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            Built by Shiwangi Kumari &copy; 2024.{" "}
          </p>
          <div className="order-1 md:order-2">
            <a
              target="_blank"
              href="https://x.com/sshiwangi770"
              className="px-2"
            >
              X
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shiwangi-kumari-5b0b3b1b7"
              className="px-2 border-l"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://github.com/sshiwangi"
              className="px-2 border-l"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
