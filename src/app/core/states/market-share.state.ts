import { Injectable } from '@angular/core';
import { Action, createSelector, State, StateContext } from '@ngxs/store';

import { AddItem } from '../actions/addItem';
import { ClearList } from '../actions/ClearList';
import { RemoveAll } from '../actions/RemoveAll';
import { RemoveItem } from '../actions/removeItem';
import { MarketShareItem } from '../interfaces/market-share-item.interface';

@State<MarketShareItem[]>({
  name: 'marketShare',
  defaults: [],
})
@Injectable()
export class MarketShareState {
  static getTotal(hasDiscount = false) {
    return createSelector([MarketShareState], (state: MarketShareItem[]) =>
      state
        .map((item) => item.qtd * (hasDiscount ? item.price * (1 - item.discount) : item.price))
        .reduce((previousValue, currentValue) => (previousValue += currentValue), 0)
    );
  }

  @Action(AddItem)
  addItem(ctx: StateContext<MarketShareItem[]>, action: AddItem) {
    const state = ctx.getState();
    const payload = action.payload;

    const item = state.find((item) => item.id === payload.id);
    if (item) {
      item.qtd++;
    } else {
      state.push({ ...payload, qtd: 1 });
    }

    ctx.setState(state);
  }

  @Action(RemoveItem)
  removeItem(ctx: StateContext<MarketShareItem[]>, action: RemoveItem) {
    const state = ctx.getState();
    const payload = action.payload;
    const item = state.find((item) => item.id === payload.id);
    if (item) {
      item.qtd--;
      if (item.qtd === 0) {
        const idx = state.findIndex((item) => item.id === action.payload.id);
        state.splice(idx, 1);
      }
    }
    ctx.setState(state);
  }

  @Action(RemoveAll)
  removeAll(ctx: StateContext<MarketShareItem[]>, action: RemoveAll) {
    const items = ctx.getState();
    const idx = items.findIndex((row) => row.id === action.payload.id)!;
    items.splice(idx, 1);
    ctx.setState(items);
  }

  @Action(ClearList)
  clearList(ctx: StateContext<MarketShareItem[]>) {
    ctx.setState([]);
  }

  calculateTotal(items: MarketShareItem[], hasDiscount = false) {
    return items
      .map((item) => item.qtd * (hasDiscount ? item.price * (1 - item.discount) : item.price))
      .reduce((previousValue, currentValue) => (previousValue += currentValue), 0);
  }
}
