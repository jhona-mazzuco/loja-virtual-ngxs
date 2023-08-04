import { MarketShareItem } from '../interfaces/market-share-item.interface';

export class RemoveAll {
  static type = '[Market Share] Remove All';

  constructor(public payload: MarketShareItem) {
  }
}
