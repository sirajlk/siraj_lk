import React from "react";

const GridBackground = () => {
  return (
    <div className=" hidden md:block absolute top-48 right-0 z-10 pointer-events-none">
      <div
        className="absolute w-[400px] h-[200px]  rounded-none"
        style={{ bottom: "15%", right: "10%" }}
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
          style={{
            backgroundSize: "20px 20px",
          }}
        />
   
      </div>
    </div>
  );
};

export default GridBackground;