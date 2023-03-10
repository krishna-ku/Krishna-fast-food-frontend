import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/components/classes/menu';
import { Menuservice } from 'src/app/components/service/menuservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu?:Menu[];

  constructor(private menuService:Menuservice) {}

  ngOnInit(): void{
    this.getMenus();
  }


  getMenus(){

    return this.menuService.getAllMenus().subscribe(response=>{
      this.menu=response.data
    });

  }




  appetizers = [
    { name: 'Garlic Bread', price: 5.99 },
    { name: 'Bruschetta', price: 7.99 },
  ];
  
  entrees = [
    { name: 'Spaghetti and Meatballs', price: 12.99 },
    { name: 'Chicken Alfredo', price: 15.99 },
  ];
  
  desserts = [
    { name: 'Tiramisu', price: 6.99 },
    { name: 'Chocolate Cake', price: 5.99 },
  ];
}