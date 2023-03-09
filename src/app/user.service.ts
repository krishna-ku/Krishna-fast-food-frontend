import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, mergeMap, of } from 'rxjs';
import { LoginService } from './services/login.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL="http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { }

  getAllUsers(options?:any): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}`,options);
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

getLoggedInUser():Observable<User>{
  
  let token=localStorage.getItem('token');

  return this.httpClient.get<any>(`${this.baseURL}/profile`, { headers: { Authorization: `Bearer ${token}` } });

}

updateUser(user: User): Observable<any>{
  return this.httpClient.put<any>(`${this.baseURL}/${user.id}`,user);
}

deleteUsers(userIds:Array<number>): Observable<any>{
  return this.httpClient.delete(`${this.baseURL}`,{body: userIds});
}

filterUsers(search:any):Observable<any>{

  const token=localStorage.getItem('token');

  return this.httpClient.post(`${this.baseURL}/filter`,search,{ headers: { Authorization: `Bearer ${token}` }});
}


}
