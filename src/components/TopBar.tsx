import React from "react";

const TopBar = () => {
  return (
    <header id="home" className="flex justify-between  items-center">
      <h1 className="text-3xl font-bold text-white">
        Siraj<span className="text-primary">.</span>
      </h1>
      <nav className=" space-x-8 text-sm items-center font-medium hidden md:flex ">
        {["Home", "Work", "Services", "Skills"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-primary transition-all"
          >
            {item}
          </a>
        ))}
        <a
          href={`#contact`}
          className="bg-primary text-black font-semibold px-4 py-1 rounded-full hover:scale-105 transition-all"
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
};

export default TopBar;
