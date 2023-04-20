import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../shared/services/products.service";
import { Product } from "../../shared/interfaces/product.interface";
import { ReplaySubject, switchMap, takeUntil } from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  private _destroy$ = new ReplaySubject(1);

  product!: Product;
  loading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductsService
  ) {
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params
      .pipe(
        takeUntil(this._destroy$),
        switchMap(({ id }) => this.service.findById(id)),
      )
      .subscribe((data) => {
        this.loading = false;
        if (data) {
          this.product = data;
        }
      })
  }
}
