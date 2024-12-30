import CardPlace from "@/components/UI/Cards/CardPlace";
import CardProduct from "@/components/UI/Cards/CardProduct";
import Header from "@/components/UI/Header";
import TextMonfex from "@/components/UI/Textual/TextMonfex";
import TextWhyMonfex from "@/components/UI/Textual/WhyMonfex";
import placesJson from "@/data/places.json";
import productJson from "@/data/product.json";
export default function Home() {
  return (
    <div>
      <Header showHeading />
      <div className="  flex flex-col justify-center items-center ">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-24 py-6 px-4 md:py-4 ">
          {placesJson.slice(0, 6).map((place) => (
            <CardPlace key={place.id} place={place} />
          ))}
        </div>
      </div>
      <TextWhyMonfex />
      <div className="  flex flex-col justify-center items-center ">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-24 py-6 px-4 md:py-4 ">
          {placesJson.slice(6, 12).map((place) => (
            <CardPlace key={place.id} place={place} />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center font-markazi text-6xl text-center my-7">
        <span className="text-blueT">
          Gusta l’eccellenza
          <br />
          sostieni il <span className="text-primary">territorio</span>.
        </span>
      </div>
      <div className="  flex flex-col justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-4">
          <CardProduct product={productJson[0]} />
        </div>
      </div>
    </div>
  );
}
