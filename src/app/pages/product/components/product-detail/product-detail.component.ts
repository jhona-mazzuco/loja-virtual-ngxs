import { Component, Input } from '@angular/core';
import { Product } from "../../../../shared/interfaces/product.interface";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() product!:  Product;
}
