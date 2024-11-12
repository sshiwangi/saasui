"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Integrations() {
  const tools = [
    {
      name: "Mailchimp",
      //   logo: "/path-to-mailchimp-logo.png",
      description:
        "Take control of your email design by using your own custom-coded HTML templates.",
    },
    {
      name: "Zapier",
      //   logo: "/path-to-zapier-logo.png",
      description:
        "Connect Apps and Automate Workflows with Zapier — No Coding Required.",
    },
    {
      name: "Stripe",
      //   logo: "/path-to-stripe-logo.png",
      description:
        "Work faster and smarter by integrating directly with Stripe, right in the app.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Integrations
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Tools You Use to Run Your Business
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {/* <Image
                      className="h-12 w-12"
                      src={tool.logo}
                      alt={tool.name}
                      width={48}
                      height={48}
                    /> */}
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {tool.name}
                    </h3>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-base text-gray-500 dark:text-gray-300">
                    {tool.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
