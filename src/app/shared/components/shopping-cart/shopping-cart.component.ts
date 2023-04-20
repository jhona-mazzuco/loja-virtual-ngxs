import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { Select } from "@ngxs/store";
import { ShoppingCartState } from "../../states/shopping-cart.state";
import { Observable } from "rxjs";
import { ShoppingCartProduct } from "../../interfaces/shopping-cart-product.interface";
import { MatBadgeModule } from "@angular/material/badge";
import { RemoveProductComponent } from "../remove-product/remove-product.component";
import { SumTotalPipe } from "../../pipes/sum-total.pipe";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, NgOptimizedImage, MatBadgeModule, RemoveProductComponent, SumTotalPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  @Select(ShoppingCartState) items$!: Observable<ShoppingCartProduct[]>;
}
