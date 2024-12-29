"use client";

import { selectCartItems } from "@/lib/features/Cart/cart.selector";
import { useAppSelector } from "@/lib/hooks";
import { PropsWithChildren } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({ isOpen, onClose, children }: PropsWithChildren<Props>) => {
  if (!isOpen) return null;
  const cartItems = useAppSelector(selectCartItems);
  return (
    <div className={`absolute -right-4 w-96 h-[calc(100vh-60px)] flex-col justify-between items-center inline-flex`}>
      <div className="w-full flex justify-end items-center px-4">
        <div className="triangle bg-neutral-lighter w-11 h-6" />
      </div>
      <div className="h-full px-4 bg-neutral-lighter flex-col justify-between items-center flex">
        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
          <div className="w-36 h-14 text-black text-2xl font-bold">Il tuo carrello ({cartItems.length})</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
