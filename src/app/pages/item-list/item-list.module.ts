import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemListComponent
      }
    ])
  ]
})
export class ItemListModule { }
