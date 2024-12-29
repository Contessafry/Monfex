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
      <IconCart className=" cursor-pointer" color={isOpenCart ? "#4CAF4F" : "#1E293B"} onClick={() => setIsOpenCart(!isOpenCart)} />
      <Drawer isOpen={isOpenCart} onClose={() => setIsOpenCart(false)}>
        <div className="overflow-y-auto overflow-x-hidden gap-2.5 flex-col justify-start items-center flex hide-scrollbar">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CartSummary />
      </Drawer>
    </div>
  );
};

export default ActionCart;
