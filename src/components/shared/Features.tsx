"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      name: "Copy and Paste",
      description: "Easily integrate components into your projects",
    },
    {
      name: "Customizable",
      description: "Tailor components to fit your specific needs",
    },
    {
      name: "Responsive",
      description: "Designs that look great on all devices",
    },
  ];

  return (
    <section className="py-20 dark:bg-neutrals-light bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base dark:text-secondary-dark text-secondary-light font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-primary-dark text-neutrals-light sm:text-4xl">
            A better way to build
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md dark:bg-secondary-dark bg-secondary-light dark:text-neutrals-light text-primary-dark">
                    {/* Add appropriate icon here */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium dark:text-primary-dark text-neutrals-light">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base dark:text-primary-muted text-neutrals-light">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
