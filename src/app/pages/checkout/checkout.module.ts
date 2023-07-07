import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsViewComponent } from './components/products-view/products-view.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CheckoutItemComponent } from './components/products-view/components/checkout-item/checkout-item.component';
import { RemoveItemButtonComponent } from '../../shared/components/remove-item-button/remove-item-button.component';
import { NgxsModule } from '@ngxs/store';

const routes: Routes = [{ path: '', component: CheckoutComponent }];

@NgModule({
  declarations: [CheckoutComponent, ProductsViewComponent, ResumeComponent, CheckoutItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), RemoveItemButtonComponent, NgxsModule],
})
export class CheckoutModule {}
