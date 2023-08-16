import { Component, inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MarketShareItem } from 'src/app/core/interfaces/market-share-item.interface';
import { MarketShareState } from 'src/app/core/states/market-share.state';
import { CalculateTotalPipe } from 'src/app/shared/pipes/calculate-total.pipe';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  total$!: Observable<number>;
  totalWithDiscount$!: Observable<number>;

  constructor() {
    const pipe = inject(CalculateTotalPipe);
    const store = inject(Store);
    this.total$ = store.select(MarketShareState.getTotal(pipe));
    this.totalWithDiscount$ = store.select(MarketShareState.getTotal(pipe, true));
  }
}
