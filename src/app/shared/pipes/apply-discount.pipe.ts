import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'applyDiscount'
})
export class ApplyDiscountPipe implements PipeTransform {

  transform(price: number, discount: number): number {
    return price * (1 - discount);
  }

}
