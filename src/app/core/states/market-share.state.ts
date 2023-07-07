import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { AddItem } from '../actions/addItem';
import { RemoveItem } from '../actions/removeItem';
import { MarketShareItem } from '../interfaces/market-share-item.interface';

@State<MarketShareItem[]>({
  name: 'marketShare',
  defaults: [],
})
@Injectable()
export class MarketShareState implements NgxsOnInit {
  ngxsOnInit(ctx: StateContext<MarketShareItem[]>): void {
    const sessionState = window.sessionStorage.getItem('marketShare');
    if (sessionState) ctx.setState(JSON.parse(sessionState));
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
    this.updateState(state);
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
    this.updateState(state);
  }

  updateState(state: MarketShareItem[]) {
    window.sessionStorage.setItem('marketShare', JSON.stringify(state));
  }
}
