"use client";

import IconCart from "@/components/icons/IconCart";
import { useState } from "react";
import Drawer from "../../Drawer";

const ActionCart = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  return (
    <div className="relative">
      <IconCart className=" cursor-pointer" color={isOpenCart ? "#4CAF4F" : "#1E293B"} onClick={() => setIsOpenCart(!isOpenCart)} />
      <Drawer isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />
    </div>
  );
};

export default ActionCart;
