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

  pageSize=15;
  currentPage=0;
  totalPages=0;
  totalElements=0;
  index:number=0;

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.fillAllUsers();
  }

  fillAllUsers(){
    this.userService.getAllUsers().subscribe(response=>{
      // const data=response.data; 
      this.user=response.data;
      // this.pageSize
      this.totalPages=response.totalPages;
      this.totalElements=response.totalElements;
    });
  }

  changeData(pageNumber:number){
    this.currentPage=pageNumber;
    this.userService.getAllUsers({
      params:{
        pageNumber:this.currentPage,
        
      }
    }).subscribe(response=>{
      // const data=response.data; 
      this.user=response.data;
      // this.pageSize
      this.totalPages=response.totalPages;
      this.totalElements=response.totalElements;
    });
  }

}
