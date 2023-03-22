import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  baseURL='http://localhost:8080/restaurants';

  constructor(private http:HttpClient) { }

  getRestaurantInfo():Observable<any>{

    return this.http.get(`${this.baseURL}`)
  }



}
