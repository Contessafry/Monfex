import Collapsable from "@/components/UI/Collapsable";
import Header from "./(partials)/Header";
import Toolbar from "./(partials)/Toolbar";
import { PageProps } from "../../../../.next/types/app/page";
import productJson from "@/data/product.json";
import { notFound } from "next/navigation";
const ProductPage = async ({ params }: PageProps) => {
  const { id: productId } = await params;

  const ProductInfo = productJson.find((product) => product.id === Number(productId));

  if (!ProductInfo) notFound();

  const { extra_info } = ProductInfo;

  return (
    <div className="flex flex-col mt-20">
      <Toolbar />
      <Header product={ProductInfo} />
      <div className="flex flex-col mx-2 md:mx-40 my-7 gap-3">
        {extra_info.map((info, i) => (
          <Collapsable key={`${info.title}${i}`} info={info} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
