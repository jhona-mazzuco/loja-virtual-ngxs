import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddItem } from './core/actions/addItem';
import { RemoveItem } from './core/actions/removeItem';
import { Item } from './core/interfaces/item.interface';
import { MarketShareState } from './core/states/market-share.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
