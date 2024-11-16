"use client";

import React from "react";
import { Search, SlidersHorizontal, Maximize2, LayoutGrid } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface CryptoData {
  id: string;
  name: string;
  icon: string;
  price: number;
  balance: { amount: number; currency: string };
  marketCap: number;
  volume: number;
  circulatingSupply: { percentage: number; trend: "up" | "down" };
}

const cryptoData: CryptoData[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    icon: "₿",
    price: 31073.31,
    balance: { amount: 5.31, currency: "BTC" },
    marketCap: 587831951441,
    volume: 16632960820,
    circulatingSupply: { percentage: 11.68, trend: "up" },
  },
  {
    id: "ethereum",
    name: "Ethereum",
    icon: "Ξ",
    price: 5073.31,
    balance: { amount: 25.11, currency: "ETH" },
    marketCap: 596997743,
    volume: 16397543,
    circulatingSupply: { percentage: 31.62, trend: "up" },
  },
  // Add more crypto data as needed
];

const CryptoTable = () => {
  return (
    <Card className="w-full bg-primary-dark border-primary-ash">
      <div className="p-4 flex items-center justify-between border-b border-primary-ash">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-muted w-4 h-4" />
          <Input
            placeholder="Search tokens"
            className="pl-9 bg-primary-light border-primary-ash text-neutrals-light placeholder:text-primary-muted"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 flex items-center gap-2 bg-primary-light rounded-md text-neutrals-light hover:bg-primary-ash transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 flex items-center gap-2 bg-primary-light rounded-md text-neutrals-light hover:bg-primary-ash transition-colors">
            Customize
          </button>
          <button className="p-2 bg-primary-light rounded-md text-neutrals-light hover:bg-primary-ash transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
          <button className="p-2 bg-primary-light rounded-md text-neutrals-light hover:bg-primary-ash transition-colors">
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-primary-muted text-xs">
              <th className="text-left p-4 font-medium">NAME</th>
              <th className="text-right p-4 font-medium">PRICE</th>
              <th className="text-right p-4 font-medium">BALANCE</th>
              <th className="text-right p-4 font-medium">MARKET CAP</th>
              <th className="text-right p-4 font-medium">VOLUME (24H)</th>
              <th className="text-right p-4 font-medium">CIRC SUPPY</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto) => (
              <tr
                key={crypto.id}
                className="border-t border-primary-ash hover:bg-primary-light/50 transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-neutrals-light">
                      {crypto.icon}
                    </div>
                    <span className="text-neutrals-light">{crypto.name}</span>
                  </div>
                </td>
                <td className="p-4 text-right text-neutrals-light">
                  ${crypto.price.toLocaleString()}
                </td>
                <td className="p-4 text-right text-neutrals-light">
                  {crypto.balance.amount} {crypto.balance.currency}
                </td>
                <td className="p-4 text-right text-neutrals-light">
                  ${crypto.marketCap.toLocaleString()}
                </td>
                <td className="p-4 text-right text-neutrals-light">
                  ${crypto.volume.toLocaleString()}
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-24 bg-primary-ash/30 rounded-full h-1.5">
                      <div
                        className={`h-full rounded-full ${
                          crypto.circulatingSupply.trend === "up"
                            ? "bg-secondary-dark"
                            : "bg-red-500"
                        }`}
                        style={{
                          width: `${crypto.circulatingSupply.percentage}%`,
                        }}
                      />
                    </div>
                    <span
                      className={`${
                        crypto.circulatingSupply.trend === "up"
                          ? "text-secondary-dark"
                          : "text-red-500"
                      }`}
                    >
                      +{crypto.circulatingSupply.percentage}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default CryptoTable;
