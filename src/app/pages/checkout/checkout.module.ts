import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsViewComponent } from './components/products-view/products-view.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CheckoutItemComponent } from './components/products-view/components/checkout-item/checkout-item.component';
import { RemoveItemButtonComponent } from '../../shared/components/remove-item-button/remove-item-button.component';
import { NgxsModule } from '@ngxs/store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ItemQtyControlComponent } from './components/products-view/components/item-qty-control/item-qty-control.component';
import { CalculateTotalPipe } from 'src/app/shared/pipes/calculate-total.pipe';
import { ApplyDiscountPipe } from 'src/app/shared/pipes/apply-discount.pipe';

const routes: Routes = [{ path: '', component: CheckoutComponent }];

@NgModule({
  declarations: [CheckoutComponent, ProductsViewComponent, ResumeComponent, CheckoutItemComponent, ItemQtyControlComponent],
  imports: [CommonModule, RouterModule.forChild(routes), RemoveItemButtonComponent, NgxsModule, MatButtonModule, MatIconModule, CalculateTotalPipe, ApplyDiscountPipe],
})
export class CheckoutModule {
}
