import React from "react";
import img from "../images/logo.png";

export const Navbar = () => {
  return (
    <div className="bg-[#2185D0] h-[50px] flex items-center justify-between text-white px-[20px] ">
      <div className="flex items-center">
        <img className="w-12 px-2.5" src={img} />
        <span className="font-semibold">Data Mapping</span>
      </div>
    </div>
    // </div>
  );
};
