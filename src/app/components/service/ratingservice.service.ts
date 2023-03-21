import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ratingservice {

  baseURL="http://localhost:8080/ratings";

  constructor(private http: HttpClient) { }

  getAllRatings(): Observable<any>{
    
    return this.http.get<any>(`${this.baseURL}`);
  }

  getFilterRatings():Observable<any>{
    return this.http.post(`${this.baseURL}/filter`,{body:{}});
  }

  giveRating(rating:any):Observable<any>{
    let lastOrder=JSON.parse(localStorage.getItem('lastOrder')??'');
      const orderId=lastOrder.orderId
      console.log(orderId);
      
    let user=JSON.parse(localStorage.getItem('user')??'')
    let userId =user.id
    return this.http.post(`${this.baseURL}/${orderId}/user/${userId}`,rating)
  }


}
