import Collapsable from "@/components/UI/Collapsable";
import Header from "./(partials)/Header";
import Toolbar from "./(partials)/Toolbar";
import { PageProps } from "../../../../.next/types/app/page";
import productJson from "@/data/product.json";
const ProductPage = async ({ params }: PageProps) => {
  const { id: productId } = await params;

  const ProductInfo = productJson.find((product) => product.id === productId);

  return (
    <div>
      <Toolbar />
      <Header />
      {Array.from({ length: 10 }).map((_, i) => (
        <Collapsable key={i} />
      ))}
    </div>
  );
};

export default ProductPage;
