import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class Menuservice {

  baseURL="http://localhost:8080/menus";

  constructor(private http:HttpClient) { }


  getAllMenus(): Observable<any>{

    return this.http.get(`${this.baseURL}`);

  }

  getAdditionalItemsOfMenu():Observable<any>{

    let token=localStorage.getItem('token');

    return this.http.get(`${'http://localhost:8080/additionalitems'}`,{headers: { Authorization: 'Bearer  ${token}' }});
  }


}
