import IconArrow from "@/components/icons/IconArrow";
import React from "react";

const Toolbar = () => {
  return (
    <div className="w-full h-8 justify-start items-center gap-2.5 flex">
      <IconArrow />
      <div className="w-80 h-7 text-black text-2xl font-normal font-['Radley']">Torna a Bottega Di Camagna</div>
    </div>
  );
};

export default Toolbar;
