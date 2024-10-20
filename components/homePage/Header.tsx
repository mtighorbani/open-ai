import { headerTitle } from "@/locale/text";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center  h-28 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">{headerTitle}</h1>
    </div>
  );
};

export default Header;
