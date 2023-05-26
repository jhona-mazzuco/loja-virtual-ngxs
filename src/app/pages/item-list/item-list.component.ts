import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/interfaces/item.interface';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items$: Observable<Item[]> = this.service.fetch();

  constructor(private service: ItemService) {}
}
