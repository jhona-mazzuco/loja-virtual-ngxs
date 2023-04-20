import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { CdkConnectedOverlay, CdkOverlayOrigin } from "@angular/cdk/overlay";
import { MatCardModule } from "@angular/material/card";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    MatCardModule,
    ShoppingCartComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isOpen = false;
}
