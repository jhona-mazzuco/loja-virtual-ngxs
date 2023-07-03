import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divide'
})
export class DividePipe implements PipeTransform {

  transform(price: number, divisor: number): number {
    return price / divisor;
  }

}
