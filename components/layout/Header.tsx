import React from "react";

const Header = () => {
  return (
    <header className="p-4 shadow-md flex items-center justify-between bg-white">
      <div className="text-xl font-bold text-blue-600">StayFinder</div>
      <input
        type="text"
        placeholder="Search properties..."
        className="border p-2 rounded-md w-1/2"
      />
      <div className="space-x-4">
        <button className="text-sm font-medium">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
