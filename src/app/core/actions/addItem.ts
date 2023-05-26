import { Item } from "../interfaces/item.interface";

export class AddItem {
    static readonly type = '[MarketShare] Add Item';

    constructor(public payload: Item) {}
}