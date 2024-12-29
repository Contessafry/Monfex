// lib/cartSlice.ts
import { ModelCartItem, ModelCartState } from "@/models/store/cart.slice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ModelCartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Aggiungi un prodotto al carrello
    addToCart(state, action: PayloadAction<ModelCartItem>) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    // Rimuovi un prodotto dal carrello
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Aggiorna la quantità di un prodotto nel carrello
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    // Rimuovi tutti gli articoli dal carrello
    clearCart(state) {
      state.items = [];
    },
  },
});

// Esportare le azioni per usarle nei componenti
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
