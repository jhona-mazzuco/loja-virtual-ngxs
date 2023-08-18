import { tap } from 'rxjs';
import { AddItem } from 'src/app/core/actions/addItem';
import { ClearList } from 'src/app/core/actions/ClearList';
import { RemoveAll } from 'src/app/core/actions/RemoveAll';
import { RemoveItem } from 'src/app/core/actions/removeItem';
import { MarketShareState } from 'src/app/core/states/market-share.state';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent implements OnInit {
  total!: number;
  totalWithDiscount!: number;

  constructor(private actions: Actions, private store: Store, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.total = this.store.selectSnapshot(MarketShareState.getTotal());
    this.totalWithDiscount = this.store.selectSnapshot(MarketShareState.getTotal(true));

    this.actions
      .pipe(
        ofActionDispatched(AddItem, ClearList, RemoveAll, RemoveItem),
        tap(() => (this.total = this.store.selectSnapshot(MarketShareState.getTotal()))),
        tap(() => (this.totalWithDiscount = this.store.selectSnapshot(MarketShareState.getTotal(true)))),
        tap(() => this.cdr.detectChanges())
      )
      .subscribe();
  }
}
