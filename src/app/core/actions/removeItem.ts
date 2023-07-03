import { MarketShareItem } from "../interfaces/market-share-item.interface";

export class RemoveItem {
    static readonly type = '[MarketShare] Remove Item';

    constructor(public payload: MarketShareItem) {}
}