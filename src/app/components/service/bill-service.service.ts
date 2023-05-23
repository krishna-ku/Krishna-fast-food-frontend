import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BillService {

  baseURL= "http://localhost:8080/";

  constructor(private http:HttpClient) {}

  getAllBillS(): Observable<any> {
    
    return this.http.get(`${this.baseURL}bills`);
  }

  downloadBills(bill:string):Observable<any>{

    return this.http.get<any>(`${this.baseURL}download/${bill}`);
  }

}
