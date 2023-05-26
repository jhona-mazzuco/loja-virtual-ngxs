import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddItem } from './core/actions/addItem';
import { RemoveItem } from './core/actions/removeItem';
import { Item } from './core/interfaces/item.interface';
import { MarketShareState } from './core/states/market-share.state';
import { Observable } from 'rxjs';

const item: Item = {
  id: Math.random(),
  title: `Item numero ${Math.random()}`,
  price: Math.random() * 1.6,
  images: []
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store) { }

  add() {
    this.store.dispatch(new AddItem(item))
  }

  remove() {
    this.store.dispatch(new RemoveItem(item));
  }
}
