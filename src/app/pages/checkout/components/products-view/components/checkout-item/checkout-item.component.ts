import { Component, Input } from '@angular/core';
import { MarketShareItem } from 'src/app/core/interfaces/market-share-item.interface';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent {
  @Input({ required: true }) item!: MarketShareItem;

}
