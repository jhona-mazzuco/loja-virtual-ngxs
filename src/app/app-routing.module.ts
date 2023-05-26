import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/item-list/item-list.module').then(m => m.ItemListModule)
  },
  {
    path: ':id/detail',
    loadChildren: () => import('./pages/item-detail/item-detail.module').then(m => m.ItemDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
