import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderlineService {
  apiUrl = 'https://minizuba-fn.azurewebsites.net/api/orderlines';
  constructor(private http: HttpClient) {}

  getOrderlines(type_id: number, quantity?: number): Observable<any[]> {
    let paramString = `type_id=${type_id}`;
    if (quantity) {
      paramString += `&quantity=${quantity}`;
    }
    return this.http.get<any[]>(`${this.apiUrl}?${paramString}`);
  }
}
