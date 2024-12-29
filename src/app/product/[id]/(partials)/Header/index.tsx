import { ModelProduct } from "@/models/product";
import ProductorJson from "@/data/productors.json";
import Summary from "./(partials)/Summary";
import Carousel from "./(partials)/Carousel";
import Button from "@/components/UI/Button";
import QuantitySelector from "@/components/UI/QuantitySelector";
import IconSave from "@/components/icons/IconSave";
import Price from "@/components/UI/Textual/Price";

interface Props {
  product: ModelProduct;
}

const Header = ({ product }: Props) => {
  const { name, productor, description, summary, image, price } = product;
  const productorInfo = ProductorJson.find((p) => p.id === productor);

  return (
    <div className="my-3 px-2.5 flex-col justify-center items-center gap-2.5 flex">
      {/* Separator */}
      <div className="self-stretch h-0.5 border-solid border-slate-800 border-[1.5px]" />
      <div className="w-full px-9 flex justify-between items-start gap-6">
        {/* Carousel */}
        <div className="w-2/3">
          <Carousel images={[`/product/${image}`]} />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between min-h-[500px] h-full">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <p className="text-grayT text-xl font-normal font-radley">{productorInfo?.name}</p>
            <IconSave />
          </div>

          {/* Middle Section */}
          <div className="flex flex-col justify-start items-start gap-3.5 flex-grow mt-4">
            <p className="text-slate-800 text-2xl font-normal font-radley">{name}</p>
            <p className="text-slate-800 text-xl font-normal">{description}</p>
            <Summary summary={summary} />
          </div>

          {/* Bottom Section */}
          <div className="w-full pt-2.5 flex justify-between items-end">
            <div className="w-32 flex flex-col justify-center items-center gap-1.5">
              <Price value={price} />
              <QuantitySelector />
            </div>
            <Button className="max-w-48">Aggiungi al carrello</Button>
          </div>
        </div>
      </div>
      {/* Separator */}
      <div className="self-stretch h-0.5 border-solid border-slate-800 border-[1.5px]" />
    </div>
  );
};

export default Header;
