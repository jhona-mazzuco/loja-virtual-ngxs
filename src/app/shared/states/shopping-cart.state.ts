import { Action, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { AddProduct } from "../actions/addProduct";
import { ShoppingCartProduct } from "../interfaces/shopping-cart-product.interface";
import { RemoveProduct } from "../actions/removeProduct";

@State<ShoppingCartProduct[]>({
  name: 'shoppingCart',
  defaults: []
})
@Injectable()
export class ShoppingCartState {
  @Action(AddProduct)
  addProduct(ctx: StateContext<ShoppingCartProduct[]>, action: AddProduct) {
    const shoppingCart = ctx.getState();

    const product = action.payload;

    const item = shoppingCart.find(({ id }) => id === product.id);
    if (item) {
      item.qty++;
    } else {
      shoppingCart.push({
        id: product.id,
        product: product,
        qty: 1
      });
    }

    ctx.setState(shoppingCart);
  }

  @Action(RemoveProduct)
  removeProduct(ctx: StateContext<ShoppingCartProduct[]>, action: RemoveProduct) {
    const shoppingCart = ctx.getState();

    const id = action.payload;

    const item = shoppingCart.find((item) => item.id === id)!;
    if (item.qty === 1) {
      const index = shoppingCart.findIndex(item => item.id === id);
      shoppingCart.splice(index, 1);
    } else {
      item.qty--;
    }

    ctx.setState(shoppingCart);
  }
}
