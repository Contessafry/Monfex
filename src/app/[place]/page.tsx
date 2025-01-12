import Header from "@/components/UI/Header";
import { PageProps } from "../../../.next/types/app/[place]/page";

import placeJson from "@/data/places.json";
import productorsJson from "@/data/productors.json";
import { notFound } from "next/navigation";
import SectionStg from "@/components/UI/SectionStg";
import CardProductor from "@/components/UI/Cards/CardProductor";
import TextWhyMonfex from "@/components/UI/Textual/WhyMonfex";
import GoBackAction from "../../components/UI/GoBackAction";

export default async function ProductorsPage({ params }: PageProps) {
  const { place }: { place: string } = await params;

  const placeInfo = placeJson.find((p) => p.id_n.toLowerCase() === place.toLowerCase());

  if (!placeInfo) notFound();

  const productors = productorsJson.filter((productors) => productors.place === placeInfo.id);

  return (
    <div>
      <Header src={`/place/${placeInfo.image}.png`} />
      <div className="mt-4">
        <GoBackAction text={`Torna alla  home`} textSize="text-4xl" />
      </div>
      <div className=" px-4 md:px-60 mt-6 ">
        <span className="text-blueT text-xl text-center text-pretty md:text-4xl">{placeInfo.description}</span>

        <div className="w-full flex items-center justify-center mt-4">
          <SectionStg stg={placeInfo.stg} />
        </div>
        <div className="w-full flex flex-col mt-16 gap-6">
          {productors.map((productor) => (
            <CardProductor key={productor.id} productor={productor} />
          ))}
        </div>
        <TextWhyMonfex />
        <div className="w-full flex items-center justify-center font-markazi text-5xl md:text-6xl text-center my-7">
          <span className="text-blueT">
            Gusta l’eccellenza
            <br />
            sostieni il <span className="text-primary">territorio</span>.
          </span>
        </div>
      </div>
    </div>
  );
}
