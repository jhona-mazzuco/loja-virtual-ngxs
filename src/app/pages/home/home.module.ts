import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductCardComponent
  ]
})
export class HomeModule { }
