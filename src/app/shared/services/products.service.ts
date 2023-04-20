import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../constants/api-url.constant";
import { Product } from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  fetchItems(): Observable<Product[]> {
    return this.http.get<Product[]>(`${ API_URL }/products`);
  }

  findById(id: string): Observable<Product> {
    return this.http.get<Product>(`${ API_URL }/products/${ id }`);
  }
}
