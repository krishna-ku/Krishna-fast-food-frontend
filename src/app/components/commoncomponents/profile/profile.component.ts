import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User|undefined;

  constructor(private userservice:UserService) {}

  ngOnInit(): void {
    this.userservice.getLoggedInUser().subscribe(user=>{
      this.user=user;
      console.log(this.user);
    });
  }

}
