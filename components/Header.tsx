import React from "react";
import Theme from "./Theme";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <main className="h-24 flex items-center justify-between px-6 bg-[#FFFFFF]/90 dark:bg-[#18181B]/90 backdrop-blur-lg">
      <Theme />
      <Navbar />
    </main>
  );
};

export default Header;
