import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {

  // newUser?:User;
  user: User = {};

  constructor(private userService:UserService) {}


  ngOnInit(): void {
    
    // this.newUser=new User();
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    
  }

  onSubmit() {
    this.userService.createNewUser(this.user).subscribe(response=>{
      console.log('User Created Successfully', response);
    });
  }

  // createNewUser(user:User){
  //   this.userService.createNewUser(user).subscribe(response=>{
  //     console.log('User Created Successfully',response);
  //   });
  // }
  // user = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // };
}
