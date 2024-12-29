"use client";

import { selectCartItems } from "@/lib/features/Cart/cart.selector";
import { useAppSelector } from "@/lib/hooks";
import { utlsSplitPrice } from "@/utility/splitPrice";

const CartSummary = () => {
  const CartItems = useAppSelector(selectCartItems);
  const cartPrices = CartItems.map((item) => {
    const { integerPart, decimalPart } = utlsSplitPrice(item.price);

    const price = Number(integerPart) + Number(decimalPart) / 100;
    const totalValue = price * item.quantity;
    return totalValue;
  });

  const total = cartPrices.reduce((acc, curr) => acc + curr, 0);

  const sliceTotal = total.toFixed(2).split(".");

  const productsTotalQty = CartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="py-4 flex-col justify-start items-start gap-6 flex">
      <div className="px-3.5 bg-[#cfc5c0] rounded border border-[#bbb0ab] flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-black text-base font-normal font-['Markazi Text'] leading-relaxed tracking-wide">prodotti ({productsTotalQty})</div>
          <div className="text-right">
            <span className="text-slate-800 text-xl font-normal font-radley">{sliceTotal[0]}</span>
            <span className="text-slate-800 text-sm font-normal font-radley">,{sliceTotal[1]} €</span>
          </div>
        </div>
        <div className="w-80 justify-between items-start inline-flex">
          <div className="text-black text-base font-normal font-['Markazi Text'] leading-relaxed tracking-wide">Spedizione</div>
          <div className="w-11 self-stretch text-right">
            <span className="text-slate-800 text-xl font-normal font-radley">0</span>
            <span className="text-slate-800 text-sm font-normal font-radley">,00 €</span>
          </div>
        </div>
        <div className="w-80 h-px border border-[#ede6e3]"></div>
        <div className="w-80 justify-between items-center inline-flex">
          <div className="text-slate-800 text-xl font-bold font-['Markazi Text'] leading-loose tracking-wide">Totale</div>
          <div className="text-right">
            <span className="text-slate-800 text-xl font-normal font-radley">{sliceTotal[0]}</span>
            <span className="text-slate-800 text-sm font-normal font-radley">,{sliceTotal[1]} €</span>
          </div>
        </div>
      </div>
      <div className="self-stretch px-4 py-2 bg-[#083400] rounded justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-[#fcfcfc] text-2xl font-normal font-radley">Vai al Checkout</div>
      </div>
    </div>
  );
};

export default CartSummary;
