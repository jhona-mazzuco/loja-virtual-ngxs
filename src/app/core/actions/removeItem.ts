import { Item } from "../interfaces/item.interface";

export class RemoveItem {
    static readonly type = '[MarketShare] Remove Item';

    constructor(public payload: Item) {}
}