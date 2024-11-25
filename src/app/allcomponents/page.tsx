"use client";
import UIDesignShowcase from "@/components/shared/DesignShowcase";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const componentData = [
  {
    imageSrc: "/images/progresschart.png",
    title: "Progress Chart",
    description: "Flowing Chart which is perfect for showing trends over time",
    link: "/allcomponents/chart",
  },
  {
    imageSrc: "/images/activitybar.png",
    title: "Activity Bar",
    description:
      "Track your activity over time with this stunning activity bar.",
    link: "/allcomponents/activitytracker",
  },
  {
    imageSrc: "/images/datepicker.png",
    title: "Date Picker",
    description: "A simple date picker that lets you pick your perfect day.",
    link: "/allcomponents/calendar",
  },
  {
    imageSrc: "/images/piechart.png",
    title: "Pie Chart",
    description:
      "This pie chart slices your numbers into a slice, with smooth animations as each piece slides into place.",
    link: "/allcomponents/piechart",
  },
  {
    imageSrc: "/images/themepicker.png",
    title: "Theme Picker",
    description:
      "One click to transform your entire app's mood - from bright and bold to sleek and subtle",
    link: "/allcomponents/dashboardthemepicker",
  },
  {
    imageSrc: "/images/profilecard.png",
    title: "Profile Card",
    description:
      "A sleek profile card showcasing user info, badges, social links, and contact actions with a clean, modern design.",
    link: "/allcomponents/profilecard",
  },
];

const AllComponents: React.FC = () => {
  const router = useRouter(); // Initialize router

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4">
      {componentData.map((component, index) => (
        <div
          key={index}
          onClick={() => router.push(component.link)}
          className="cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <UIDesignShowcase
            imageSrc={component.imageSrc}
            title={component.title}
            description={component.description}
          />
        </div>
      ))}
    </div>
  );
};

export default AllComponents;
