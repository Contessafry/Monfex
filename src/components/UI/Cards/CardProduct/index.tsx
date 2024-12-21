import React from "react";
import Button from "../../Button";
import Image from "next/image";
import FrameProduct from "@/components/icons/FrameProduct";

const CardProduct = () => {
  return (
    <div className="h-[425px]  bg-white rounded-lg shadow-lg shadow-black/25 flex flex-col justify-between items-center ">
      <div className=" self-stretch h-64 bg-black/20 rounded-t-lg  flex-col justify-end items-center flex">
        <Image width={1000} height={1000} className="w-full height-full " src="/product/miele.png" alt="" />
      </div>
      <FrameProduct />
      <div className="w-[250.63px] h-[158.83px] p-[7.29px] flex-col justify-end items-center gap-[11.66px] flex overflow-hidden">
        <div className="self-stretch h-[59.77px] flex-col justify-start items-start gap-[5.83px] flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-center text-[#6b778a] text-sm font-normal font-['Radley']">Lorem ipsum</div>
            <div className="w-[18.94px] h-[18.94px] px-[4.37px] py-[2.19px] justify-center items-center flex overflow-hidden" />
          </div>
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="w-[153px] text-center text-slate-800 text-[29.14px] font-bold font-['Markazi Text']">Stracchino Dop</div>
            <div className="w-[53.92px] self-stretch text-center text-slate-800 text-xl font-normal font-['Radley']">39,99</div>
          </div>
        </div>
        <Button variant="primary">Aggiungi al carrello</Button>

        <Button variant="secondary">Vedi dettagli</Button>
      </div>
    </div>
  );
};

export default CardProduct;
