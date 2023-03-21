import { Component, OnInit } from '@angular/core';
import { map, timer } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user?: User[];

  selectingUsers = false;

  searchTerm='';

  pageSize = 15;
  currentPage = 0;
  totalPages = 0;
  totalElements = 0;
  index: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.fillAllUsers();
  }

  fillAllUsers() {
    this.userService.getAllUsers
      ({
        params: {
          // pageNumber: this.currentPage,
          pageSize: this.pageSize

        }
      }).subscribe(response => {
        // const data=response.data; 
        this.user = response.data;
        // this.pageSize
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
      });
  }

  changeData(pageNumber: number) {
    this.currentPage = pageNumber;
    this.userService.getAllUsers({
      params: {
        pageNumber: this.currentPage,
        pageSize: this.pageSize

      }
    }).subscribe(response => {
      // const data=response.data; 
      this.user = response.data;
      // this.pageSize
      this.totalPages = response.totalPages;
      this.totalElements = response.totalElements;
    });
  }

  deleteSelectedUsers() {
    let usersId: Array<number> = [];
    if (this.user && this.user.length > 0) {
      for (let u of this.user) {
        if (u.selected == true && u.id != undefined) {
          usersId.push(u.id);
        }
      }
      this.userService.deleteUsers(usersId).subscribe();
      Swal.fire('Delete', 'Users is Deleted Successfully');
      setTimeout(() => {
        location.reload()
      }, 3000);
    }
  }

  filterUsers(){

    const search=this.searchTerm;
    console.log(search);
    const s:any[] =search.split(":");
    // "{"deleted":"true"}"
    const o:any={};
    o[s[0]]=s[1];
    this.userService.filterUsers(o).subscribe(response=>{
      this.user=response

      console.log(this.user);
      
    });

  }

  activateMultipleUsers(){
    let userIds:Array<number>=[];
    if(this.user && this.user.length>0){
      for(let u of this.user){
        if(u.selected==true && u.id!=undefined)
        userIds.push(u.id);
      }
    }
    console.log(userIds)
    this.userService.activateUsers(userIds).subscribe();
    Swal.fire('Activate', 'Users is Activate Successfully');
      setTimeout(() => {
        location.reload()
      }, 3000);

  }



}
