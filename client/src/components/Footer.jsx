import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[10vh] flexbox bg-[var(--primColor)] text-white">
      <p className="text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} · Designed & Built by{" "}
        <span className="font-medium text-white">Manish</span>
      </p>
    </div>
  );
};

export default Footer;
