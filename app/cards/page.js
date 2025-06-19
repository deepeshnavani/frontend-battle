"use client";

import React, { useState, useEffect } from "react";
import { AlignJustify, Check } from "lucide-react";
import Image from "next/image";
import Header from "../Header";

const BrandKits = () => {
  const [selectedBrand, setSelectedBrand] = useState("The Agency");
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
    }
  }, [darkMode]);

  const brands = [
    {
      id: "ecorp",
      name: "ECorp",
      icon: "/overlapping-circles.png",
    },
    {
      id: "icorp",
      name: "ICorp",
      icon: "/overlapping-circles.png",
    },
    {
      id: "agency",
      name: "The Agency",
      icon: "/overlapping-circles.png",
    },
  ];

  const handleBrandSelect = (brandName) => {
    setSelectedBrand(brandName);
  };

  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div
        className={`min-h-screen flex items-center justify-center p-4 relative transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="absolute -inset-1 bg-gradient-to-b from-transparent to-gray-200/50 dark:to-gray-800/50 rounded-2xl blur-sm opacity-75" />

        <div
          className={`relative ${
            darkMode ? "bg-gray-900" : "bg-white"
          } rounded-2xl p-8 w-96 z-10 border border-gray-700`}
        >
          <h1 className="text-2xl font-semibold mb-8">Brand Kits</h1>

          <div className="space-y-4">
            {brands.map((brand) => (
              <div
                key={brand.id}
                onClick={() => handleBrandSelect(brand.name)}
                className={`group relative rounded-xl p-4 cursor-pointer transition-all duration-200 border ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-500"
                    : "bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                          selectedBrand === brand.name
                            ? "bg-blue-500 border-blue-500"
                            : darkMode
                            ? "border-gray-500 hover:border-gray-400"
                            : "border-gray-400 hover:border-gray-500"
                        }`}
                      >
                        {selectedBrand === brand.name && (
                          <Check
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Image
                        src={brand.icon}
                        alt={`${brand.name} Icon`}
                        width={28}
                        height={28}
                        className="rounded-full"
                      />
                      <span className="text-lg font-medium">{brand.name}</span>
                    </div>
                  </div>

                  <button className="text-gray-400 hover:text-gray-300 transition-colors duration-200 p-1">
                    <AlignJustify className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 pointer-events-none z-0" />
      </div>
    </>
  );
};

export default BrandKits;
