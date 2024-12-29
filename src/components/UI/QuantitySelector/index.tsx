"use client";

import IconMinus from "@/components/icons/IconMinus";
import IconPlus from "@/components/icons/IconPlus";
import { on } from "events";
import { useEffect, useState } from "react";

interface Props {
  defaultQuantity?: number;
  onChange?: (quantity: number) => void;
}

const QuantitySelector = ({ defaultQuantity = 1, onChange }: Props) => {
  const [quantity, setQuantity] = useState(defaultQuantity);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  useEffect(() => {
    onChange?.(quantity);
  }, [quantity]);

  return (
    <div className="rounded justify-start items-center flex">
      <button className="self-stretch px-2 bg-secondary rounded-tl rounded-bl border-l border-t border-b border-secondary-darker justify-center items-center gap-3 flex" onClick={decreaseQuantity}>
        <IconMinus />
      </button>

      <div className="grow shrink basis-0 self-stretch px-2 bg-neutral-darker border-t border-b border-[#c4bab6] justify-center items-center gap-3 flex">
        <div className="w-7 text-lg text-center text-black font-normal font-markazi">{quantity}</div>
      </div>

      <button className="w-8 self-stretch bg-secondary rounded-tr rounded-br border-r border-t border-b border-secondary-darker justify-center items-center gap-3 flex" onClick={increaseQuantity}>
        <IconPlus />
      </button>
    </div>
  );
};

export default QuantitySelector;
