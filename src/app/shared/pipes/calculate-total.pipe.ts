import { Pipe, PipeTransform } from '@angular/core';
import { MarketShareItem } from '../../core/interfaces/market-share-item.interface';
import { ApplyDiscountPipe } from './apply-discount.pipe';

@Pipe({
  standalone: true,
  name: 'calculateTotal',
})
export class CalculateTotalPipe implements PipeTransform {
  constructor (
    private applyDiscountPipe: ApplyDiscountPipe
  ) { }

  transform(items: MarketShareItem[], hasDiscount = false): number {
    return items
      .map(item => item.qtd * (hasDiscount? this.applyDiscountPipe.transform(item.price, item.discount) : item.price))
      .reduce((previousValue, currentValue) => previousValue += currentValue, 0);
  }
}
