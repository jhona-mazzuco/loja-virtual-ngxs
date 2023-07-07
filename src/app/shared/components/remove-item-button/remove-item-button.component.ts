import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngxs/store';
import { RemoveItem } from 'src/app/core/actions/removeItem';
import { MarketShareItem } from 'src/app/core/interfaces/market-share-item.interface';

@Component({
  standalone: true,
  selector: 'app-remove-item-button',
  templateUrl: './remove-item-button.component.html',
  styleUrls: ['./remove-item-button.component.scss'],
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class RemoveItemButtonComponent {
  @Input() item: MarketShareItem | undefined;

  constructor(private store: Store) {}

  removeItem() {
    this.store.dispatch(new RemoveItem(this.item!));
  }
}
