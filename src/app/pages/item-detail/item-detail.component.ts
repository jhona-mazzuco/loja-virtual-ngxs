import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { takeUntil, ReplaySubject, tap, switchMap, map } from 'rxjs';
import { ItemService } from 'src/app/shared/services/item.service';
import { Item } from 'src/app/core/interfaces/item.interface';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  destroy$ = new ReplaySubject(1);
  id!: string;
  data!: Item;

  constructor(private activatedRoute: ActivatedRoute, private service: ItemService) {

  }

  ngOnInit() {
   this.activatedRoute.paramMap.pipe(
    takeUntil(this.destroy$),
    map((item) => item.get('id')!),
    tap((id) => this.id = id),
    switchMap((id) => this.service.fetchById(id)),
    tap((data) => this.data = data)
   ).subscribe();

  }
}
