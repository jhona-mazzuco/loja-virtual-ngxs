import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemDetailComponent } from './item-detail.component';
import { NgOptimizedImage } from '@angular/common';
import { BuyButtonComponent } from './components/buy-button/buy-button.component';
import { ImageOptionComponent } from './components/image-option/image-option.component';
import { ImageViewComponent } from './components/image-view/image-view.component';
import { ItemDataComponent } from './components/item-data/item-data.component';
import { ItemSuggentionsComponent } from './components/item-suggentions/item-suggentions.component';
import { ApplyDiscountPipe } from 'src/app/shared/pipes/apply-discount.pipe';
import { DividePipe } from './pipes/divide.pipe';


@NgModule({
  declarations: [
    ItemDetailComponent,
    BuyButtonComponent,
    ImageOptionComponent,
    ImageViewComponent,
    ItemDataComponent,
    ItemSuggentionsComponent,
    DividePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ItemDetailComponent}]),
    NgOptimizedImage,
    ApplyDiscountPipe
  ],
  providers: [NgOptimizedImage]
})
export class ItemDetailModule { }
