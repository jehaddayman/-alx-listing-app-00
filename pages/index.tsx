import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import React from "react";

const filters = ["Top Villa", "Self Checkin", "Pool", "Pet Friendly"];

const Pill = ({ label }: { label: string }) => (
  <span className="px-3 py-1 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-blue-200">
    {label}
  </span>
);

const HomePage = () => {
  return (
    <div className="space-y-8 p-4 md:p-8">
      {/* Hero */}
      <section className="relative h-64 md:h-96 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
          alt="hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2 text-sm md:text-lg">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-2">
        {filters.map((f, idx) => (
          <Pill key={idx} label={f} />
        ))}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <div key={idx} className="border rounded-xl overflow-hidden shadow-sm">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{property.name}</h3>
              <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
              <div className="mt-2 text-yellow-500">⭐ {property.rating}</div>
              <div className="mt-1 font-bold">${property.price}/night</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
