import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {

  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snack:MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(3),Validators.pattern(`^[a-zA-Z ]+$`)]],
      lastName: ['', Validators.pattern(`^[a-zA-Z ]+$`)],
      email: ['', [Validators.required, Validators.email,Validators.pattern(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`)]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{6,}$')]]
    });                                       
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      if (user.email) {
        this.userService.checkEmailExist(user.email).subscribe(emailExists => {
          if (!emailExists) {
            this.userService.createNewUser(user).subscribe(response => {
              console.log('User Created Successfully', response);
              // alert('submit'); 
              // this.snack.open('Submit','',{
              //   duration: 3000,
              // });
              Swal.fire('Submit','User is registered successfully');
            });
          } else {
            // alert('Email already exists');
            this.snack.open('Email alread exists','',{
              duration: 3000,
            });
          }
        });
      }
    } else {
      // alert('Please fill all required fields and correct the invalid ones.');
      this.snack.open('Please fill all required fields and correct the invalid ones.','',{
        duration:3000,
        // horizontalPosition:'',
        // verticalPosition:'top'
      });
    }
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

