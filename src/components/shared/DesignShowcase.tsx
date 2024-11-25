"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface UIDesignShowcaseProps {
  imageSrc: string;
  title: string;
  description: string;
}

const UIDesignShowcase: React.FC<UIDesignShowcaseProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <Card className="relative max-w-[400px] aspect-square bg-primary-light/20 backdrop-blur-lg border border-primary-light hover:border-primary-muted rounded-[32px] ">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-transparent" />

      <CardContent className="relative p-8">
        {/* Circle K indicator */}
        <div className="absolute top-6 left-6">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary-light to-secondary-dark flex items-center justify-center">
            <span className="text-sm font-medium text-white">K</span>
          </div>
        </div>

        {/* Window UI */}
        <div className="relative bg-primary-light rounded-lg p-4 ">
          {/* Window Controls */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-secondary-dark opacity-50" />
            <div className="w-3 h-3 rounded-full bg-secondary-light opacity-50" />
            <div className="w-3 h-3 rounded-full bg-primary-muted opacity-50" />
          </div>

          {/* Bet Text with dotted border */}
          <div className="inline-block relative">
            <div className="absolute -inset-1 border border-dashed border-neutrals-light/20 rounded" />
            <div className="relative">
              <img
                src={imageSrc}
                alt="activity bar"
                className="w-full h-full rounded-lg "
              />
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-8 ">
        <div className="">
          <h2 className="text-2xl font-medium text-neutrals-light mb-2">
            {title}
          </h2>
          <p className="text-primary-muted">{description}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UIDesignShowcase;
