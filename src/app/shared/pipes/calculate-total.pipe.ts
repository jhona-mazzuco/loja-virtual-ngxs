import { Pipe, PipeTransform } from '@angular/core';
import { MarketShareItem } from '../../core/interfaces/market-share-item.interface';

@Pipe({
  standalone: true,
  name: 'calculateTotal'
})
export class CalculateTotalPipe implements PipeTransform {
  transform(items: MarketShareItem[]): number {
    return items
      .map(item => item.qtd * item.price)
      .reduce((previousValue, currentValue) => previousValue += currentValue, 0);
  }
}
