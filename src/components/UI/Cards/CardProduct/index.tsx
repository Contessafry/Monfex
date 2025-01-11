import React from "react";
import Button from "../../Button";
import Image from "next/image";

import { ModelProduct } from "@/models/product";
import ProductorsJson from "@/data/productors.json";
import IconSave from "@/components/icons/IconSave";
import ActionAddToCart from "./(partials)/ActionAddToCart";
import Price from "../../Textual/Price";
interface Props {
  product: ModelProduct;
}
const CardProduct = ({ product }: Props) => {
  const { name, price, image, productor } = product;
  const productorInfo = ProductorsJson.find((p) => p.id === productor);

  return (
    <div className=" w-44 md:w-72 h-full bg-white rounded-lg shadow-lg shadow-black/25 flex flex-col justify-between items-center ">
      <div className="relative self-stretch bg-black/10 rounded-t-lg  flex-col justify-end items-center flex">
        <Image width={2000} height={2000} className=" w-full height-full   object-bottom mix-blend-darken" src={`/product/${image}`} alt="" />
        <div className="absolute product-shape bg-white h-11" />
      </div>
      <div className="w-full flex-col justify-end items-center gap-3 flex overflow-hidden">
        <div className="w-full flex justify-between items-center px-2 ">
          <div className="text-center text-[#6b778a] text-xs md:text-sm font-normal font-radley">{productorInfo?.name}</div>
          <IconSave />
        </div>
        <div className="w-full justify-between items-center gap-2 flex px-2">
          <div className="text-center text-slate-800 text-sm  md:text-xl font-bold ">{name}</div>
          <div className="hidden md:block">
            <Price value={price} />
          </div>
          <div className="md:hidden block">
            <Price value={price} size="s" />
          </div>
        </div>
        <div className=" w-full flex flex-col gap-3 px-3 pb-6">
          <ActionAddToCart product={product} />
          <div className="md:block hidden">
            <Button variant="secondary" href={`/product/${product.id}`}>
              Vedi dettagli
            </Button>
          </div>
          <div className="block md:hidden">
            <Button variant="secondary" size="small" href={`/product/${product.id}`}>
              Vedi dettagli
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
