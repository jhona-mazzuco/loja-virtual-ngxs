import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddItem } from 'src/app/core/actions/addItem';
import { Item } from 'src/app/core/interfaces/item.interface';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent {
  @Input() data: Item | undefined = undefined;

  constructor(
    private store: Store
  ) { }

  addItem() {
    this.store.dispatch(new AddItem(this.data!)).subscribe()
  }
}
