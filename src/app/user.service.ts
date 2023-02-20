import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, mergeMap, of } from 'rxjs';
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

  createNewUser(user: User): Observable<any> {
    return this.checkEmailExist(user.email).pipe(
      mergeMap((emailExists: boolean) => {
        if (!emailExists) {
          return this.httpClient.post<any>(`${this.baseURL}`, user);
        } else {
          return throwError('Email already exists');
        }
      })
    );
  }

  checkEmailExist(email: string | undefined): Observable<boolean> {
  if (!email) {
    return of(false);
  }
  return this.httpClient.post<boolean>(`${this.baseURL}/email`, email);
}

}
