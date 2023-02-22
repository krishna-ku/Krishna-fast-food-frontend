import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL:string='';

  constructor(private http:HttpClient) {
    this.URL="http://localhost:8080";
  }

  generateToken(credentials:any):Observable<HttpResponse<any>>
  {
    return this.http.post(`${this.URL}/login`,credentials,{observe:'response'})
  }

  //for login user
  loginUser(token:any,username:any)
  {
    console.log(token);
    // debugger
    localStorage.setItem("token",token);
    localStorage.setItem("username",username);
    return true;
  }
  //check user is logged in or not
  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token=='' || token==null)
    {
      return false;
    }else{
      return true;
    }
  }

  //logout the user
  logout()
  {
    const username=localStorage.getItem('username');
    localStorage.removeItem('token')
    console.log('inside logout');
    
    this.http.post(`${this.URL}/out`,username).subscribe(
      ()=>console.log('Logout successful.'),
      (error)=>console.log('Logout failed: ',error)
      );
      console.log(username);
    return true;
  }

  //for getting the token from local storage
  getToken()
  {
    return localStorage.getItem('token')
  }

  // public getUserRole(){



  // }

}
