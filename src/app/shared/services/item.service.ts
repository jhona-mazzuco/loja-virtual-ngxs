import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from 'src/app/core/interfaces/item.interface';
import { ENVIRONMENT } from 'src/environments/env';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) { }

  fetch(): Observable<Item[]> {
    return this.http.get<Item[]>(`${ENVIRONMENT.API}/products`);
  }

  fetchById(id: string): Observable<Item> {
    return this.http.get<Item>(`${ENVIRONMENT.API}/products/${id}`);
  }
}
