import { ModelPlace } from "@/models/place";
import Image from "next/image";
import React from "react";
import CardPlaceAction from "./(partials)/Action";

interface Props {
  place: ModelPlace;
}
const CardPlace = ({ place }: Props) => {
  return (
    <div className="h-64 rounded-lg shadow-lg shadow-black/25 flex flex-col justify-start items-start gap-4 w-fit">
      <div className="w-64 h-64 relative rounded-lg  overflow-hidden">
        <Image width="1000" height="1000" className="w-64 h-64 left-0 top-0 absolute rounded-tl-lg rounded-tr-lg" src={`/place/${place.image}`} alt={place.name} />
        <div className="w-full h-full py-4  top-0 absolute flex flex-col justify-end items-center gap-4  overflow-hidden px-4">
          <span className=" text-center text-white text-4xl font-bold font-markazi text-outline">{place.name}</span>
          <CardPlaceAction placeName={place.name} />
        </div>
      </div>
    </div>
  );
};

export default CardPlace;
