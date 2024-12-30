import { ModelPlace } from "@/models/place";
import React from "react";

interface Props {
  stg: ModelPlace["stg"];
}

const SectionStg = ({ stg }: Props) => {
  return (
    <div className="w-full max-w-3xl p-5 rounded-3xl shadow-lg shadow-black/25 border-2 border-primary flex-col  gap-5 flex">
      <div className="self-stretch justify-center items-center gap-5 inline-flex">
        <div className="text-center">
          <span className="text-blueT text-2xl md:text-4xl font-bold ">Prodotti </span>
          <span className="text-accent text-2xl md:text-4xl font-bold ">STG</span>
        </div>
      </div>
      <div className="md:min-h-24 flex w-full items-center">
        <ul className="w-full grid grid-cols-2  gap-5 list-disc list list-inside text-2xl md:text-4xl">
          {stg.map((el, i) => (
            <li className={`text-accent ${i % 2 === 0 ? "text-left" : "text-right"}`} key={el}>
              <span className="text-primary  font-bold">{el}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionStg;
