import { Product } from "./product.interface";

export interface ShoppingCartProduct {
  id: number;
  product: Product;
  qty: number;
}
