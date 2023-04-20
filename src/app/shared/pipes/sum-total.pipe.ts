import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingCartProduct } from "../interfaces/shopping-cart-product.interface";

@Pipe({
  name: 'sumTotal',
  standalone: true
})
export class SumTotalPipe implements PipeTransform {
  transform(value: ShoppingCartProduct[]): number {
    return value.length ? value
      .map((item) => item.qty * item.product.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0) : 0;
  }
}
