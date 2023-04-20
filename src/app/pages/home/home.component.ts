import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from "../../shared/interfaces/product.interface";
import { ProductsService } from "../../shared/services/products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items$: Observable<Product[]> = this.service.fetchItems();

  constructor(private service: ProductsService) {
  }
}
