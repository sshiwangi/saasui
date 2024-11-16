"use client";
import React from "react";
import { motion } from "framer-motion";
// import LayoutEffect from "../wrappers/LayoutEffect";
// import Image from "next/image";

function Hero() {
  return (
    <section className="pt-20 pb-32 bg-neutrals-light dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-primary-dark dark:text-neutrals-light sm:text-5xl md:text-6xl">
            <span className="block">Elevate your projects with</span>
            <span className="block text-secondary-dark dark:text-secondary-dark">
              ease and style
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-primary-muted dark:text-neutrals-light sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Get access to a vast collection of free, high-quality components and
            templates that you can seamlessly copy and paste into your projects.
          </p>
          <div className=" py-10 mt-4 text-center">
            <h2 className="text-2xl font-semibold text-primary-dark dark:text-neutrals-light mb-8">
              Built With
            </h2>
            <div className="flex justify-center items-center gap-8">
              <svg
                width="24"
                height="24"
                viewBox="0 0 210 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M210 0V105L157.667 157.5L105.333 210L53 157.5L105.333 105L210 0Z"
                  fill="#C8C5C5"
                />
                <path d="M210 105V210L158 157.5L210 105Z" fill="#DCDBDB" />
                <path
                  d="M105 105L52.5 157.5L0 210V0L52.5 52.5L105 105Z"
                  fill="#DCDBDB"
                />
              </svg>

              <svg
                width="36px"
                height="36px"
                viewBox="0 -101.5 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                fill="#dcdbdb"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z"
                      fill="#dcdbdb"
                      fill-rule="nonzero"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 185 185"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M176.285 96.8061L96.2849 176.806M160.285 8.80609L8.28491 160.806"
                  stroke="#DCDBDB"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {/* <Image
                src="/icons/nextjs.svg"
                alt="Next.js"
                width={100}
                height={24}
                className="opacity-70"
              />

              <Image
                src="/icons/shadcnui.svg"
                alt="Shadcn UI"
                width={100}
                height={24}
                className="opacity-70"
              />

              <Image
                src="/icons/tailwindcss.svg"
                alt="Tailwind CSS"
                width={100}
                height={24}
                className="opacity-70"
              />

              <Image
                src="/icons/framermotion.svg"
                alt="Framer Motion"
                width={100}
                height={24}
                className="opacity-70"
              /> */}
            </div>
          </div>
          <div className="mt-5  w-full  sm:flex sm:justify-center gap-4 md:mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/allcomponents"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutrals-light bg-secondary-dark hover:bg-secondary-light dark:text-primary-dark dark:bg-secondary-dark dark:hover:bg-secondary-dark md:py-4 md:text-lg md:px-10"
              >
                Explore components
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/allcomponents"
                className="w-full flex items-center justify-center px-8 py-3 border border-secondary-dark text-base font-medium rounded-md text-primary-dark hover:bg-secondary-dark dark:text-neutrals-light dark:hover:bg-secondary-dark md:py-4 md:text-lg md:px-10"
              >
                Give a Star
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
