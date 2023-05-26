import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Item } from '../interfaces/item.interface';
import { AddItem } from '../actions/addItem';
import { RemoveItem } from '../actions/removeItem';

@State<Item[]>({
  name: 'marketShare',
  defaults: []
})
@Injectable()
export class MarketShareState {

    @Action(AddItem)
    addItem(ctx: StateContext<Item[]>, action: AddItem) {
      const state = ctx.getState();

      state.push(action.payload);

      ctx.setState(state);
    }


    @Action(RemoveItem)
    removeItem(ctx: StateContext<Item[]>, action: RemoveItem) {
      const state = ctx.getState();
      const idx = state.findIndex(item => item.id === action.payload.id);
      state.splice(idx, 1);
      ctx.setState(state);
    }
}