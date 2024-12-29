"use client";

import Button from "@/components/UI/Button";
import QuantitySelector from "@/components/UI/QuantitySelector";
import Price from "@/components/UI/Textual/Price";
import { addToCart } from "@/lib/features/Cart/cart.slice";
import { useAppDispatch } from "@/lib/hooks";
import { ModelProduct } from "@/models/product";
import { useState } from "react";

interface Props {
  product: ModelProduct;
}

const ActionHeader = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="w-full pt-2.5 flex justify-between items-end">
      <div className="w-32 flex flex-col justify-center items-center gap-1.5">
        <Price value={product.price} />
        <QuantitySelector onChange={(current) => setQuantity(current)} />
      </div>
      <Button className="max-w-48" onClick={handleAddToCart}>
        Aggiungi al carrello
      </Button>
    </div>
  );
};

export default ActionHeader;