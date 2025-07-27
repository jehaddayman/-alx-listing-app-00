import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 text-center text-gray-500 border-t mt-8">
      &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
    </footer>
  );
};

export default Footer;
