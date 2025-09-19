import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HERO_BACKGROUND } from "@/constants";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
// constants/index.ts
export const HERO_BACKGROUND = "/assets/images/hero-bg.jpg"; 
// make sure this image exists inside the public/assets/images folder
// pages/index.tsx


export default function Home() {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
    >
      <div className="bg-black/40 absolute inset-0" /> {/* dark overlay */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
    </section>
  );
}

import React from "react";

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick: (label: string) => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition 
        ${isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
    >
      {label}
    </button>
  );
};

export default Pill;

export const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Beachfront",
  "Countryside",
  "Luxury",
];


import React, { useState } from "react";
import Pill from "./Pill";
import { FILTERS } from "@/constants";

const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (label: string) => {
    setActiveFilter(label === activeFilter ? null : label);
  };

  return (
    <div className="flex flex-wrap gap-3 p-4">
      {FILTERS.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          isActive={activeFilter === filter}
          onClick={handleFilterClick}
        />
      ))}
    </div>
  );
};

export default FilterSection;

import FilterSection from "@/components/FilterSection";

export default function Home() {
  return (
    <div>
      <FilterSection />
      {/* Other sections like Hero, Listings, etc. */}
    </div>
  );
}


import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  return (
    <div className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Property Image */}
            <img
              src={property.image}
              alt={property.name}
              className="h-48 w-full object-cover"
            />

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">{property.name}</h3>
              <p className="text-gray-600 mt-1">${property.price} / night</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">★</span>
                <span className="ml-1 text-sm text-gray-700">{property.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

