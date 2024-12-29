import CardPlace from "@/components/UI/Cards/CardPlace";
import CardProduct from "@/components/UI/Cards/CardProduct";
import Header from "@/components/UI/Header";
import TextMonfex from "@/components/UI/Textual/TextMonfex";
import placesJson from "@/data/places.json";
import productJson from "@/data/product.json";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="  flex flex-col justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-4">
          {placesJson.slice(0, 6).map((place) => (
            <CardPlace key={place.id} place={place} />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center font-markazi text-6xl text-center my-7">
        <span className="text-blueT">
          <span className="font-bold">
            Perché scegliere <TextMonfex />?
          </span>
          <br /> Sostieni i <span className="font-bold">piccoli produttori</span>, riscopri la tradizione e <br /> assapora la qualità <span className="font-bold text-accent">DOP</span>.
        </span>
      </div>
      <div className="  flex flex-col justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-4">
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
