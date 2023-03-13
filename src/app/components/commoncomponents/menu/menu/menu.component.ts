  import { Component, OnInit,Input } from '@angular/core';
  import { Menu } from 'src/app/components/classes/menu';
  import { Menuservice } from 'src/app/components/service/menuservice.service';
  import { LoginService } from 'src/app/services/login.service';

  @Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  })
  export class MenuComponent implements OnInit {

    menu?:Menu[];

    constructor(private menuService:Menuservice,
      private loginservice:LoginService) {}

    ngOnInit(): void{
      this.getMenus();
    }


    getMenus(){

      return this.menuService.getAllMenus().subscribe(response=>{
        this.menu=response.data
      });

    }

    @Input() cart: { name: string, itemQuantity: number }[] = [];

    addToCart(item:any){

      // if(this.loginservice.isLoggedIn()){

      //   window.location.href="/login"

      //   setTimeout(() => {
      //   alert("please login first");
      //   },0);
      // }
      // else{
        const itemExist=this.cart.find(cartItem=> cartItem.name==item.name);

        if(itemExist){
          itemExist.itemQuantity++;
        }else{
        this.cart.push({ name: item.name,itemQuantity:1 });
        console.log(this.cart);
        
      // }
    }
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