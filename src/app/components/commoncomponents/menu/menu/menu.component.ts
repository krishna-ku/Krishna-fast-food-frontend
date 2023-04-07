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
    filteredMenu?:Menu[]=[];
    // i=0;

    // cartMap=new Map();

    constructor(private menuService:Menuservice,
      private loginservice:LoginService,
      private dialog:MatDialog,) {}

      ngOnInit(): void {

        // this.cart.push({name:'ice cream',itemQuantity:2})
        // debugger

        this.getMenus();
      
        const item = localStorage.getItem('cart');
        if (item && item.trim() !== '') {
          this.cart = JSON.parse(item);
        }

        // localStorage.getItem('itemQuantity');
      }

    getMenus(){

      return this.menuService.getAllMenus().subscribe(response=>{
        this.menu=response.data;
        this.filteredMenu=this.menu?.filter((item)=>item.type==='normal');
        // this.filteredMenu?.find(i=>i.quantity=0);
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
        // this.i++;
        const itemExist=this.cart.find(cartItem=> cartItem.name==item.name);

        if(itemExist){
          itemExist.itemQuantity++;
          // this.cartMap.set(item.id,this.cartMap.get(item.id)+1);
          // item.quantity++;
        }else{
        this.cart.push({ name: item.name,itemQuantity:1 });
        // this.cartMap.set(item.id,1);
        // item.quantity=+1;
        // n++;
        // console.log(n);
        
        // console.log(this.cart);
        
      }
      // localStorage.setItem('itemQuantity',item.quantity);
      localStorage.setItem('cart',JSON.stringify(this.cart));
    }
  }

  removeFromCart(item:any){
    const itemExist=this.cart?.find(i=>i.name==item.name)
    if(itemExist){
    itemExist.itemQuantity--;
    if(itemExist?.itemQuantity===0){
    const index=this.cart.indexOf(itemExist);
    this.cart.splice(index,1);}
    // item.quantity--;
    // localStorage.setItem('itemQuantity',item.quantity);
    localStorage.setItem('cart',JSON.stringify(this.cart));
    }
  }

  
  menuAdditionalItems(){
    this.dialog.open(AdditionalitemsofmenuComponent)
  }


  findItemExist(item:any){
    const itemExist=this.cart.find(i=>i.name===item.name);
    if(itemExist){
      return true;
    }else{
      return false;
    }
  }
  
  findItem(item:any){
    const itemExist=this.cart.find(i=>i.name===item.name);
    return itemExist?.itemQuantity;
    }
  
}