import Header from "@/components/UI/Header";
import TextMonfex from "@/components/UI/TextMonfex";

import placeJson from "@/data/places.json";
import productorsJson from "@/data/productors.json";
import { ModelPlace } from "@/models/place";
import { notFound } from "next/navigation";
import SectionStg from "@/components/UI/SectionStg";
import CardProductor from "@/components/UI/Cards/CardProductor";
import { PageProps } from "../../../../.next/types/app/[place]/page";

export default async function ProductorPage({ params }: PageProps) {
  const { place, productor }: { place: string; productor: string } = await params;

  return (
    <div>
      <Header src={`/productors/${productor.toLowerCase()}.png`} />
      <div className="px-60 mt-6 ">
        <span className="text-blueT text-4xl">{productor}</span>

        <div className="w-full flex items-center justify-center font-markazi text-6xl text-center my-7">
          <span className="text-blueT">
            <span className="font-bold">
              Perché scegliere <TextMonfex />?
            </span>
            <br /> Sostieni i <span className="font-bold">piccoli produttori</span>, riscopri la tradizione e <br /> assapora la qualità <span className="font-bold text-accent">DOP</span>.
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
