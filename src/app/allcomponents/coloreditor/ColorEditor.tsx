"use client";

import React, { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { Card } from "@/components/ui/card";
import { X, Pipette } from "lucide-react";
import { cn } from "@/lib/utils";

interface ColorValue {
  r: number;
  g: number;
  b: number;
  a: number;
}

const TabButton = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "w-8 h-8 rounded-full flex items-center justify-center",
      active ? "bg-primary-ash" : "hover:bg-primary-ash/50"
    )}
  >
    {children}
  </button>
);

const ColorEditor = () => {
  const [color, setColor] = useState("#9B5DE5");
  const [activeTab, setActiveTab] = useState(0);
  const [colorValues, setColorValues] = useState<ColorValue>({
    r: 155,
    g: 93,
    b: 229,
    a: 100,
  });

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    // Convert hex to RGB
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newColor);
    if (result) {
      setColorValues({
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: colorValues.a,
      });
    }
  };

  const handleRGBChange = (channel: keyof ColorValue, value: string) => {
    const numValue = Math.min(255, Math.max(0, parseInt(value) || 0));
    const newValues = { ...colorValues, [channel]: numValue };
    setColorValues(newValues);

    // Convert RGB to hex
    const hex = `#${newValues.r.toString(16).padStart(2, "0")}${newValues.g
      .toString(16)
      .padStart(2, "0")}${newValues.b.toString(16).padStart(2, "0")}`;
    setColor(hex);
  };

  return (
    <Card className="w-[340px] p-4 bg-primary-dark border-primary-ash">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-neutrals-light">Fill</h3>
        <button className="text-primary-muted hover:text-neutrals-light transition-colors">
          <X size={16} />
        </button>
      </div>

      {/* Color Mode Tabs */}
      <div className="flex gap-1 p-1 bg-primary-light rounded-full mb-4">
        {[
          <div key="solid" className="w-4 h-4 bg-current rounded-full" />,
          <div
            key="gradient"
            className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />,
          <div
            key="pattern"
            className="w-4 h-4 border-2 border-current rounded-full"
          />,
          <div
            key="image"
            className="w-4 h-4 bg-current rounded-full opacity-50"
          />,
        ].map((icon, index) => (
          <TabButton
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {icon}
          </TabButton>
        ))}
      </div>

      {/* Color Picker */}
      <div className="mb-4">
        <HexColorPicker
          color={color}
          onChange={handleColorChange}
          className="!w-full !h-[160px]"
        />
      </div>

      {/* Color Spectrum */}
      <div className="h-4 w-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded mb-4" />

      {/* RGB Inputs */}
      <div className="grid grid-cols-5 gap-2 mb-2">
        {Object.entries(colorValues).map(([key, value]) => (
          <div key={key}>
            <input
              type="number"
              value={value}
              onChange={(e) =>
                handleRGBChange(key as keyof ColorValue, e.target.value)
              }
              className="w-full px-2 py-1 bg-primary-light border border-primary-ash rounded text-neutrals-light text-sm"
              min="0"
              max={key === "a" ? "100" : "255"}
            />
          </div>
        ))}
        <select className="bg-primary-light border border-primary-ash rounded text-neutrals-light text-sm px-1">
          <option>RGB</option>
          <option>HSL</option>
          <option>HSB</option>
        </select>
      </div>

      {/* Eyedropper */}
      <button className="w-6 h-6 bg-primary-light hover:bg-primary-ash rounded flex items-center justify-center transition-colors">
        <Pipette size={14} className="text-neutrals-light" />
      </button>
    </Card>
  );
};

export default ColorEditor;
