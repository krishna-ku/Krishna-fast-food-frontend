  import { Component, OnInit,Input } from '@angular/core';
  import { Menu } from 'src/app/components/classes/menu';
  import { Menuservice } from 'src/app/components/service/menuservice.service';
  import { LoginService } from 'src/app/services/login.service';
  import { MatDialog } from '@angular/material/dialog';
import { AdditionalitemsofmenuComponent } from '../../cart/menuadditional/additionalitemsofmenu/additionalitemsofmenu.component';

  @Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  })
  export class MenuComponent implements OnInit {

    menu?:Menu[];

    constructor(private menuService:Menuservice,
      private loginservice:LoginService,
      private dialog:MatDialog,) {}

      ngOnInit(): void {
        this.getMenus();
      
        const item = localStorage.getItem('cart');
        if (item && item.trim() !== '') {
          this.cart = JSON.parse(item);
        }
      }

    getMenus(){

      return this.menuService.getAllMenus().subscribe(response=>{
        this.menu=response.data
      });

    }

    cart: { name: string, itemQuantity: number }[] = [];//local storage

    addToCart(item:any){
      if(!this.loginservice.isLoggedIn()){

        window.location.href="/login"

        setTimeout(() => {
        alert("please login first");
        },0);
      }
      else{
        const itemExist=this.cart.find(cartItem=> cartItem.name==item.name);

        if(itemExist){
          itemExist.itemQuantity++;
        }else{
        this.cart.push({ name: item.name,itemQuantity:1 });
        console.log(this.cart);
        
      }
      localStorage.setItem('cart',JSON.stringify(this.cart));
    }
  }

  
  menuAdditionalItems(){
    this.dialog.open(AdditionalitemsofmenuComponent)
  }

  }