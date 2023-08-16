import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddItem } from '../../../../../../core/actions/addItem';
import { MarketShareItem } from '../../../../../../core/interfaces/market-share-item.interface';
import { RemoveItem } from '../../../../../../core/actions/removeItem';

@Component({
  selector: 'app-item-qty-control',
  templateUrl: './item-qty-control.component.html',
  styleUrls: ['./item-qty-control.component.scss']
})
export class ItemQtyControlComponent {
  @Input({ required: true }) item!: MarketShareItem;

  constructor(private store: Store) {
  }

  change(isAdd = true) {
    this.store.dispatch(isAdd ? new AddItem(this.item!) : new RemoveItem(this.item!))
  }

}
