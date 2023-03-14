import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  user:User|undefined;


  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService
    ,private userservice:UserService
    ) { }

  ngOnInit(): void{
    // this.getLoggedInUser();
    // localStorage.setItem('user',JSON.stringify(this.user?.firstName))
    
  }

  onSubmit()
  {
    // console.log("Form is submitted ");
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.username!=null && this.credentials.password!=null))
    {
      console.log("form");
      this.loginService.generateToken(this.credentials).subscribe(

        (response)=>{
          const token =response.headers.get('Authorization');
          if(token){
            const decodedToken=jwt_decode(token)as any;
            const userRole = decodedToken.authorities.some((authority: any) => {
              const role= authority.authority.toUpperCase();
              return role=='ADMIN';
            });
          this.loginService.loginUser(token.replace('Bearer ',''));
          if (userRole){
            this.getLoggedInUser();
            window.location.href="/admin";
          }
          else
          console.log('user dashboard');
        }else{
          console.log('Invalid username and password');
          alert('Invalid username and password');
          // this.snackBar.open('Error: Wrong credentials','close',{duration:3000})
        }
        },(error)=>{
          console.log(error);
          alert("please enter valid username and password")
        }
      )
    }else{
      console.log("Fields are empty !!");
      alert("Fields are empty !!");
    }
  }

  getLoggedInUser(){
    this.userservice.getLoggedInUser().subscribe(response=>{
      this.user=response
      localStorage.setItem('user',JSON.stringify(this.user));
    });
  }

}
