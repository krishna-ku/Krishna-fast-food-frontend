import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void{

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
          // console.log(response);
          if(token){
          this.loginService.loginUser(token.replace('Bearer ',''),this.credentials.username);
          window.location.href="/dashboard";
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

}
