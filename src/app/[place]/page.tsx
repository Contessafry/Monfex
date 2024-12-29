import Header from "@/components/UI/Header";
import TextMonfex from "@/components/UI/Textual/TextMonfex";
import { PageProps } from "../../../.next/types/app/[place]/page";

import placeJson from "@/data/places.json";
import productorsJson from "@/data/productors.json";
import { notFound } from "next/navigation";
import SectionStg from "@/components/UI/SectionStg";
import CardProductor from "@/components/UI/Cards/CardProductor";

export default async function ProductorsPage({ params }: PageProps) {
  const { place }: { place: string } = await params;

  const placeInfo = placeJson.find((p) => p.id_n.toLowerCase() === place.toLowerCase());

  if (!placeInfo) notFound();

  const productors = productorsJson.filter((product) => product.place === placeInfo.id);

  return (
    <div>
      <Header src={`/place/${place.toLowerCase()}.png`} />
      <div className="px-60 mt-6 ">
        <span className="text-blueT text-4xl">{placeInfo.description}</span>

        <div className="w-full flex items-center justify-center mt-4">
          <SectionStg stg={placeInfo.stg} />
        </div>
        <div className="w-full flex flex-col mt-16 gap-6">
          {productors.map((productor) => (
            <CardProductor key={productor.id} productor={productor} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center font-markazi text-6xl text-center my-7">
          <span className="text-blueT">
            <span className="font-bold">
              Perché scegliere <TextMonfex />?
            </span>
            <br /> Sostieni i <span className="font-bold">piccoli produttori</span>, riscopri la tradizione e <br /> assapora la qualità <span className="font-bold text-accent">Locale</span>.
          </span>
        </div>

        <div className="w-full flex items-center justify-center font-markazi text-6xl text-center my-7">
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
