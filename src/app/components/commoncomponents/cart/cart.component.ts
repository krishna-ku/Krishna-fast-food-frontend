import { Component,Input,OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Orderservice } from '../../service/orderservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any[]=[];

  constructor(private orderservice:Orderservice){}

  ngOnInit(): void {
    // const cartItemsString:any = localStorage.getItem('cart');
    // this.cartItems=JSON.parse(this.items);
    this.cartItems=JSON.parse(localStorage.getItem('cart')??'') || [];
    
  }

  placedOrder(){

    this.orderservice.placedOrder(this.cartItems).subscribe(response=>{
      Swal.fire('Thank you','Order Placed Successfully');
      localStorage.removeItem('cart');
      window.location.href="/menu";
    });
  }

}
