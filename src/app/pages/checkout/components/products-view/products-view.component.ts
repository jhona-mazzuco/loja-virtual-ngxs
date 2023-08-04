import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MarketShareItem } from 'src/app/core/interfaces/market-share-item.interface';
import { MarketShareState } from 'src/app/core/states/market-share.state';
import { ClearList } from '../../../../core/actions/ClearList';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent {
  @Select(MarketShareState) items$!: Observable<MarketShareItem[]>;

  constructor(private store: Store) {
  }

  removeAll() {
    this.store.dispatch(new ClearList())
  }
}
