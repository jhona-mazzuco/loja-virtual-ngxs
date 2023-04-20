import { Product } from "../interfaces/product.interface";

export class AddProduct {
  static readonly type = '[Shopping Cart] Add Product';
  constructor(public payload: Product) {
  }
}
