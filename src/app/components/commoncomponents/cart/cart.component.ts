import { Component,Input,OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Orderservice } from '../../service/orderservice.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() hero:any;

  cartItems:any[]=[];

  constructor(
    private orderservice:Orderservice,
    ){}

    // ngAfterContentInit(): void{
    //   console.log('111111---------',this.hero);
    // }

  ngOnInit(): void {
    // const cartItemsString:any = localStorage.getItem('cart');
    // this.cartItems=JSON.parse(this.items);
    this.cartItems=JSON.parse(localStorage.getItem('cart')??'') || [];

    // console.log(this.hero);
    // this.cartItems=this.hero;
    
    
  }

  placedOrder(){

    this.orderservice.placedOrder(this.cartItems).subscribe(response=>{
      Swal.fire('Thank you','Order Placed Successfully');
      setTimeout(() => {
        localStorage.removeItem('cart');
      window.location.href="/menu";
      }, 3000);
    });
  }

}
