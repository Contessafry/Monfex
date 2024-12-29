export interface ModelCartItem {
  id: string | number;
  name: string;
  price: number | string;
  quantity: number;
  image: string;
}

export interface ModelCartState {
  items: ModelCartItem[];
}
