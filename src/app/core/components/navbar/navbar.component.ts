import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { OverlayModule } from "@angular/cdk/overlay";
import { Item } from '../../interfaces/item.interface';
import { Observable } from 'rxjs';
import { MarketShareState } from '../../states/market-share.state';
import { Select } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { MarketShareItem } from '../../interfaces/market-share-item.interface';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule,
    MatCardModule,
    CartItemComponent
  ]
})
export class NavbarComponent {
  isOpen = false;
  @Select(MarketShareState) items$!: Observable<MarketShareItem[]>;
}
