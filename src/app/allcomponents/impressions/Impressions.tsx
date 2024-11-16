"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import DeckGL from "@deck.gl/react";
import { H3HexagonLayer } from "@deck.gl/geo-layers";
import Map from "react-map-gl";
import * as h3 from "h3-js";

interface CountryData {
  name: string;
  value: number;
  flag: string;
}

const countryData: CountryData[] = [
  { name: "USA", value: 43987, flag: "🇺🇸" },
  { name: "Australia", value: 32648, flag: "🇦🇺" },
  { name: "Germany", value: 26563, flag: "🇩🇪" },
  { name: "Spain", value: 21514, flag: "🇪🇸" },
  { name: "Argentina", value: 43987, flag: "🇦🇷" },
];

const ACTIVE_REGIONS = {
  USA: [
    [40, -100],
    [35, -90],
    [45, -110],
  ],
  Australia: [
    [-25, 135],
    [-30, 145],
    [-35, 140],
  ],
  Germany: [
    [51, 10],
    [49, 12],
    [50, 9],
  ],
  Spain: [
    [40, -3],
    [41, -4],
    [39, -2],
  ],
  Argentina: [
    [-35, -65],
    [-38, -63],
    [-40, -67],
  ],
};

const INITIAL_VIEW_STATE = {
  longitude: 0,
  latitude: 20,
  zoom: 1.5,
  pitch: 0,
  bearing: 0,
};

const ImpressionsMap = () => {
  // Generate hexagons for active regions
  const activeHexagons = Object.values(ACTIVE_REGIONS).flatMap((coords) =>
    coords.map(([lat, lng]) => h3.latLngToCell(lat, lng, 3))
  );

  // Generate hexagons for the entire world
  const hexData = [];
  for (let lat = -90; lat <= 90; lat += 3) {
    for (let lng = -180; lng <= 180; lng += 3) {
      const hexId = h3.latLngToCell(lat, lng, 3);
      hexData.push({
        hexId,
        isActive: activeHexagons.includes(hexId),
        value: 1,
      });
    }
  }

  const layers = [
    new H3HexagonLayer({
      id: "h3-hexagon-layer",
      data: hexData,
      pickable: true,
      wireframe: false,
      filled: true,
      extruded: false,
      getHexagon: (d) => d.hexId,
      getFillColor: (d) =>
        d.isActive
          ? [65, 187, 145, 150] // secondary-dark with opacity
          : [39, 43, 43, 50], // primary-ash with opacity
      getElevation: 0,
      opacity: 1,
      coverage: 0.9,
    }),
  ];

  return (
    <Card className="flex gap-10 p-8 bg-primary-dark border-primary-ash w-[900px]">
      {/* Left side - Map */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-neutrals-light mb-8">
          Impressions
        </h2>
        <div className="relative h-[350px] bg-primary-dark rounded-lg overflow-hidden">
          <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={layers}
          >
            <Map
              mapStyle="mapbox://styles/mapbox/dark-v10"
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            />
          </DeckGL>
        </div>
      </div>

      {/* Right side - Stats */}
      <div className="w-[280px]">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[44px] font-bold text-neutrals-light leading-none">
            231,841
          </h3>
          <button className="p-1.5 hover:bg-primary-light/10 rounded-full transition-colors">
            <ArrowUpRight className="w-5 h-5 text-primary-muted" />
          </button>
        </div>
        <p className="text-primary-muted mb-6">Impressions worldwide</p>

        <div className="space-y-2">
          {countryData.map((country) => (
            <motion.div
              key={country.name}
              className="flex items-center justify-between p-3 rounded-xl bg-primary-light/5 hover:bg-primary-light/10 transition-colors"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{country.flag}</span>
                <span className="text-neutrals-light">{country.name}</span>
              </div>
              <span className="text-primary-muted">
                {country.value.toLocaleString()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ImpressionsMap;
