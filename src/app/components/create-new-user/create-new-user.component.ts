import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {

  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });                                       
  }

  onSubmit() {
    if(this.userForm.valid)
    // const user: User = this.userForm.value;
    this.userService.createNewUser(this.userForm.value).subscribe(response=>{
      console.log('User Created Successfully', response);
      alert('submit'); 
    }); 
    alert(console.log());
  }
}
// import { Component,OnInit } from '@angular/core';
// import { User } from 'src/app/user';
// import { UserService } from 'src/app/user.service';

// @Component({
//   selector: 'app-create-new-user',
//   templateUrl: './create-new-user.component.html',
//   styleUrls: ['./create-new-user.component.css']
// })
// export class CreateNewUserComponent implements OnInit {

//   // newUser?:User;
//   user: User = {};

//   constructor(private userService:UserService) {}


//   ngOnInit(): void {
    
//     // this.newUser=new User();
//     this.user = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: ''
//     };
    
//   }

//   onSubmit() {
//     this.userService.createNewUser(this.user).subscribe(response=>{
//       console.log('User Created Successfully', response);
//     });
//   }

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

