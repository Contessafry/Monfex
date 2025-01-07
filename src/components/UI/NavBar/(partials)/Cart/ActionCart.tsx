"use client";

import IconCart from "@/components/icons/IconCart";
import { useState } from "react";
import Drawer from "../../../Drawer";
import CartSummary from "./CartSummary";
import { useAppSelector } from "@/lib/hooks";
import { selectCartItems } from "@/lib/features/Cart/cart.selector";
import CartItem from "./CartItem";

const ActionCart = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const cartItems = useAppSelector(selectCartItems);

  return (
    <div className="relative">
      <IconCart className=" cursor-pointer  w-8 md:w-10" color={isOpenCart ? "#4CAF4F" : "#1E293B"} onClick={() => setIsOpenCart(!isOpenCart)} />
      <Drawer isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} className="-right-4" title={`Il tuo carrello (${cartItems.length})`}>
        <div className="overflow-y-auto overflow-x-hidden gap-2.5 flex-col h-full justify-between items-center flex hide-scrollbar">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="h-full flex flex-col justify-end items-end ">
          <CartSummary />
        </div>
      </Drawer>
    </div>
  );
};

export default ActionCart;
