import { Component, OnInit } from '@angular/core';
import { Orderservice } from 'src/app/components/service/orderservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp-confimation',
  templateUrl: './otp-confimation.component.html',
  styleUrls: ['./otp-confimation.component.css']
})
export class OtpConfimationComponent implements OnInit {

  otp:string='';
  cartItems:any[]=[];

  constructor(private orderservice:Orderservice,) {}

  ngOnInit(): void {
    this.cartItems=JSON.parse(localStorage.getItem('cart')??'') || [];
  }


  placedOrder(){

    if(this.otp.trim()===''){
      Swal.fire('please Enter OTP');
      return;
    }
    this.orderservice.placedOrder(this.cartItems).subscribe(response=>{
      Swal.fire('Thank you','Order Placed Successfully');
      setTimeout(() => {
        localStorage.removeItem('cart');
      window.location.href="/menu";
      }, 3000);
    });
  }

}
