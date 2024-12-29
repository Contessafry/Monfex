import { ModelCartState } from "@/models/store/cart.slice";

export const selectCartItems = (state: { cart: ModelCartState }) => state.cart.items;
