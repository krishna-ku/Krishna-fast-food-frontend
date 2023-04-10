import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Restaurant } from '../classes/restaurant';
import { Restaurantpeekhours } from '../classes/restaurantpeekhours';
import { Ratingdashboard } from '../classes/ratingdashboard';

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

  ratingDahsboard():Observable<Ratingdashboard>{
    return this.http.get(`${'http://localhost:8080/ratingdashboard'}`);
  }

  orderDashboard(fromDate?:any,toDate?:any): Observable<any>{
    console.log(fromDate);
    
    const URL=`http://localhost:8080/dashboard?fromDate=${fromDate}&toDate=${toDate}`;
    return this.http.get(URL);
  }

  orderStatistics(fromDate?:any,toDate?:any): Observable<any>{
    const URL=`http://localhost:8080/orderstatistics?fromDate=${fromDate}&toDate=${toDate}`;
    return this.http.get(URL);
  }

}


