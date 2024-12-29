import Header from "@/components/UI/Header";
import TextMonfex from "@/components/UI/Textual/TextMonfex";
import { PageProps } from "../../../../.next/types/app/[place]/page";
import productorJson from "@/data/productors.json";
import ProductJson from "@/data/product.json";
import { notFound } from "next/navigation";
import CardProduct from "@/components/UI/Cards/CardProduct";
export default async function ProductorPage({ params }: PageProps) {
  const { place, productor }: { place: string; productor: string } = await params;

  const parsedProductor = decodeURIComponent(productor);
  const productorInfo = productorJson.find((productor) => productor.name === parsedProductor);

  if (!productorInfo) notFound();

  const products = ProductJson.filter((product) => product.productor === productorInfo.id);

  return (
    <div>
      <Header src={`/productors/${productorInfo.image}`} />
      <div className="px-60 mt-6 ">
        <div className="w-full my-14">
          <span className="text-blueT text-4xl">{productorInfo.description}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-4">
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
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
