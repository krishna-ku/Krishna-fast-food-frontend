import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User|undefined;

  userForm!:FormGroup;

  constructor(private userservice:UserService,fb:FormBuilder) {
    this.userForm = fb.group({

        firstName: ['', [Validators.required,Validators.minLength(3),Validators.pattern(`^[a-zA-Z ]+$`)]],
        lastName: ['', Validators.pattern(`^[a-zA-Z ]+$`)],
        email: ['', [Validators.required, Validators.email,Validators.pattern(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`)]],
        mobileNumber: [''],
        address: ['']
    });
}

  ngOnInit(): void {
    this.getLoggedInUserDetails();
  }

  getLoggedInUserDetails(){
    this.userservice.getLoggedInUser().subscribe(user=>{
        this.user=user;
        this.userForm.patchValue({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            mobileNumber: user.mobileNumber,
            address: user.address
        });
    });
}

  onSubmit(){
    if(this.userForm.valid){
      const updateUser={...this.user,...this.userForm.value};
      this.userservice.updateUser(updateUser).subscribe(response=>{
        this.user=response.data
      })

    }
    
  }

}
