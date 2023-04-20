import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { Product } from "../../interfaces/product.interface";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  items!: Product[];
}
