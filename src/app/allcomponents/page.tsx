import UIDesignShowcase from "@/components/shared/DesignShowcase";
import React from "react";

const AllComponents: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4">
      <UIDesignShowcase
        imageSrc="/images/bargraph.png"
        title="Progress Chart"
        description="Flowing Chart which is perfect for showing trends over time"
      />
      <UIDesignShowcase
        imageSrc="/images/activitybar.png"
        title="Activity Bar"
        description="Track your activity over time with this stunning activity bar."
      />
      <UIDesignShowcase
        imageSrc="/images/datepicker.png"
        title="Date Picker"
        description="A simple date picker that lets you pick your perfect day."
      />
      <UIDesignShowcase
        imageSrc="/images/piechart.png"
        title="Pie Chart"
        description="This pie chart slices your numbers into a slice, with smooth animations as each piece slides into place. "
      />
      <UIDesignShowcase
        imageSrc="/images/themepicker.png"
        title="Theme Picker"
        description="One click to transform your entire app's mood - from bright and bold to sleek and subtle "
      />
    </div>
  );
};

export default AllComponents;
