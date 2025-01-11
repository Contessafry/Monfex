"use client";
import Button from "@/components/UI/Button";
import React from "react";
import { useDispatch } from "react-redux"; // Importa useDispatch
import { addToCart } from "@/lib/features/Cart/cart.slice"; // Importa l'azione addToCart
import { useAppDispatch } from "@/lib/hooks";
import { ModelProduct } from "@/models/product";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
interface Props {
  product: ModelProduct;
}

const ActionAddToCart = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <>
      <div className="hidden md:block">
        <Button variant="primary" onClick={handleAddToCart}>
          Aggiungi al carrello
        </Button>
      </div>
      <div className="md:hidden block">
        <Button variant="primary" size="small" onClick={handleAddToCart}>
          Aggiungi al carrello
        </Button>
      </div>
    </>
  );
};

export default ActionAddToCart;
