import { Component, Input } from '@angular/core';
import { Item } from 'src/app/core/interfaces/item.interface';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent {
  @Input() data: Item | undefined = undefined;
}
