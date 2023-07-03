import { Component, Input } from '@angular/core';
import { Item } from 'src/app/core/interfaces/item.interface';

@Component({
  selector: 'app-item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.scss']
})
export class ItemDataComponent {
  @Input() data: Item | undefined = undefined;
}
