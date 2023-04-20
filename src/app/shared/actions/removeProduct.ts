export class RemoveProduct {
  static readonly type = '[Shopping Cart] Remove Product';
  constructor(public payload: number) {
  }
}
