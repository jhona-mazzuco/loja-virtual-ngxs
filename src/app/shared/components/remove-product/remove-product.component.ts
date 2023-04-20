import { Component, Input } from '@angular/core';
import { Store } from "@ngxs/store";
import { RemoveProduct } from "../../actions/removeProduct";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.scss'],
  imports: [
    MatButtonModule,
    MatIconModule
  ]
})
export class RemoveProductComponent {
  @Input() id!: number;

  constructor(private store: Store) {
  }

  onClick() {
    this.store.dispatch(new RemoveProduct(this.id));
  }
}
