import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from "./product-routing.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductComponent,
    ImagePreviewComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule
  ],
  providers: [NgOptimizedImage]
})
export class ProductModule { }
