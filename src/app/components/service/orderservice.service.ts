import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Orderservice {

  baseURL="http://localhost:8080/orders";

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<any>{
    
    return this.http.get<any>(`${this.baseURL}`);
  }

  placedOrder(cart:any[]):Observable<any>{
    let user=JSON.parse(localStorage.getItem('user')??'');
    let userId=user.id;
    const order = { orderItems: cart };
    return this.http.post(`${this.baseURL}/${userId}`, order);
  }


}
