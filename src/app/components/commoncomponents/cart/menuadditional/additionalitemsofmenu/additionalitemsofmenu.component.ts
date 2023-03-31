import { Component,OnInit } from '@angular/core';
import { Menuadditionalitems } from 'src/app/components/classes/menuadditionalitems';
import { Menuservice } from 'src/app/components/service/menuservice.service';
import { MatDialog } from '@angular/material/dialog';
import { Menu } from 'src/app/components/classes/menu';

@Component({
  selector: 'app-additionalitemsofmenu',
  templateUrl: './additionalitemsofmenu.component.html',
  styleUrls: ['./additionalitemsofmenu.component.css']
})
export class AdditionalitemsofmenuComponent implements OnInit {


  menu?:Menu[]=[];
  filteredMenu?:Menu[]=[];
  
  cartItems:any[]=[];


  constructor(private menuservice:Menuservice,
    private dialog:MatDialog,
    ) {}

  ngOnInit(): void {
    this.getAdditionalItemsOfMenu();
    this.cartItems=JSON.parse(localStorage.getItem('cart')??'') || [];
  }

  getAdditionalItemsOfMenu(){

    this.menuservice.getAllMenus().subscribe(response=>{
      this.menu=response.data;
      this.filteredMenu=this.menu?.filter((item)=>item.type==='addon');
    });
  }

  addItemsInCart(item:any){

    const itemsInCart=this.cartItems.find(cartItem=>cartItem.name===item.name);
    console.log(itemsInCart);
    
    if(itemsInCart){
      itemsInCart.itemQuantity++;
    }
    else{
      this.cartItems.push({name:item.name,itemQuantity:1})
      console.log(this.cartItems);
    }
    localStorage.setItem('cart',JSON.stringify(this.cartItems));
  }

  closeMatDialog(){
    this.dialog.closeAll();
  }

}
