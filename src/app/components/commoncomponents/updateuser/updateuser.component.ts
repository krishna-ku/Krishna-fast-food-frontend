import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {


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

  onSubmit(){

  }

}
