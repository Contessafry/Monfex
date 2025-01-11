import Collapsable from "@/components/UI/Collapsable";
import Header from "./(partials)/Header";
import { PageProps } from "../../../../.next/types/app/page";
import productJson from "@/data/product.json";
import productorsJson from "@/data/productors.json";
import { notFound } from "next/navigation";
import GoBackAction from "../../../components/UI/GoBackAction";
const ProductPage = async ({ params }: PageProps) => {
  const { id: productId } = await params;

  const ProductInfo = productJson.find((product) => product.id === Number(productId));

  if (!ProductInfo) notFound();

  const { extra_info, productor } = ProductInfo;
  const productorInfo = productorsJson.find((p) => p.id === productor);

  return (
    <div className="flex flex-col mt-20">
      <GoBackAction text={`Torna a ${productorInfo?.name || ""}`} />
      <Header product={ProductInfo} productorName={productorInfo?.name || ""} />
      <div className="flex flex-col mx-2 md:mx-40 my-7 gap-3">
        {extra_info.map((info, i) => (
          <Collapsable key={`${info.title}${i}`} info={info} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
