import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class Admindashboard {

  constructor(private http:HttpClient) { }


  restaurantPeekHours():Observable<any>{
    return this.http.get(`${'http://localhost:8080/peekhours'}`);
  }

  threeMostOrderDishes():Observable<any>{
    return this.http.get(`${'http://localhost:8080/mostorderdish'}`);
  }

  ratingDahsboard():Observable<any>{
    return this.http.get(`${'http://localhost:8080/ratingdashboard'}`);
  }

}


