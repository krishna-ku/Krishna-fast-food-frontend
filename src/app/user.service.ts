import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL="http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}`);
  }

  createNewUser(user:User): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}`,user);
  }

}
