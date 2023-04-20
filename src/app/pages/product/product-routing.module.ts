import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: ':id/detail',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
