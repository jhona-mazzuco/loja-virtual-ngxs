import { Component, Input } from '@angular/core';
import { Product } from "../../../../shared/interfaces/product.interface";
import { Store } from "@ngxs/store";
import { AddProduct } from "../../../../shared/actions/addProduct";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() product!:  Product;

  constructor(private store: Store) {
  }

  add() {
    this.store.dispatch(new AddProduct(this.product));
  }
}
