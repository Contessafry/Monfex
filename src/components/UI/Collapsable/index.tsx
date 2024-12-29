"use client";

import { useState } from "react";
import IconCollapse from "@/components/icons/IconCollapse";
import { ModelProduct } from "@/models/product";

interface Props {
  info: ModelProduct["extra_info"][number];
  defaultOpen?: boolean;
}

const Collapsable = ({ info, defaultOpen = false }: Props) => {
  const { title, description } = info;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 p-5 rounded-xl bg-neutral-darker border-2 border-[#bbb0ab]">
      <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 cursor-pointer" onClick={toggleCollapse}>
        <p className="flex-grow w-auto text-2xl font-bold text-left text-primary">{title}</p>
        <IconCollapse className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow w-auto text-xl text-left text-slate-800">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Collapsable;
