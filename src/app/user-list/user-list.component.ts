import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit  {

  user?: User[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    // this.user = [{
    //   id: 1,
    //   firstName: "keshav",
    //   lastName: "sharma",
    //   email: "sharmakeshav"
    // }];
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(response=>{
      // const data=response.data; 
      this.user=response.data;
    });
  }

}
