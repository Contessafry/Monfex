import IconSave from "@/components/icons/IconSave";
import QuantitySelector from "@/components/UI/QuantitySelector";
import Price from "@/components/UI/Textual/Price";
import { ModelCartItem } from "@/models/store/cart.slice";
import { utlsTruncateText } from "@/utility/truncateText";
import Image from "next/image";

interface Props {
  item: ModelCartItem;
}

const CartItem = ({ item }: Props) => {
  const { image, price, quantity, name } = item;
  return (
    <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[339px] h-24 p-px rounded-[5px] bg-[#ede6e3] border border-[#083400]">
      <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2.5 rounded-tl-[5px] rounded-bl-[5px]">
        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-24 w-[82px] relative gap-2.5 px-[5px] rounded-tl-[5px] rounded-bl-[5px] bg-black/10">
          <Image width={2000} height={2000} className="w-full object-bottom mix-blend-darken" src={`/product/${image}`} alt="" />
        </div>
        <div className="flex flex-col justify-between items-end self-stretch flex-grow-0 flex-shrink-0">
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-slate-800">{utlsTruncateText(name, 15)}</p>
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-2.5">
            <Price value={price} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end self-stretch flex-grow p-[5px]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-[5px]">
          <IconSave />

          <svg width="20" height="20" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.73317 11.5833L2.9165 10.7666L6.18317 7.49996L2.9165 4.23329L3.73317 3.41663L6.99984 6.68329L10.2665 3.41663L11.0832 4.23329L7.8165 7.49996L11.0832 10.7666L10.2665 11.5833L6.99984 8.31663L3.73317 11.5833Z"
              fill="#1E293B"
            />
          </svg>
        </div>
        <QuantitySelector defaultQuantity={quantity} />
      </div>
    </div>
  );
};

export default CartItem;
