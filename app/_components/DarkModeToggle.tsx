"use client";

import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    const selector = document.getElementsByTagName("html");

    selector[0].setAttribute("data-theme", isDark ? "light" : "dark");

    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleDarkMode} className="text-xl">
      {isDark ? <IoSunnySharp className="text-white" /> : <BsMoonStarsFill className="text-white" />}
    </button>
  );
};

export default DarkModeToggle;
