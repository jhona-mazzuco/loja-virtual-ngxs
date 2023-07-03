import { Component, Input, OnInit } from '@angular/core';
import { MarketShareItem } from '../../interfaces/market-share-item.interface';
import { CommonModule } from '@angular/common';
import { RemoveItemButtonComponent } from 'src/app/shared/components/remove-item-button/remove-item-button.component';

@Component({
  standalone: true,
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  imports: [
    CommonModule,
    RemoveItemButtonComponent
  ]
})
export class CartItemComponent {
  @Input() item: MarketShareItem | undefined;
  constructor() { }


}
