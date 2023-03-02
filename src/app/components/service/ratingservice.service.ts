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
}
