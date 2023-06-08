import { Component,Input,OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Orderservice } from '../../service/orderservice.service';
import { MatDialog } from '@angular/material/dialog';
import { OtpConfimationComponent } from './otp-confimation/otp-confimation.component';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() hero:any;

  cartItems:any[]=[];
  user:User|null=null;

  constructor(
    private orderservice:Orderservice,
    private dialog:MatDialog,
    private http:HttpClient
    ){}

    // ngAfterContentInit(): void{
    //   console.log('111111---------',this.hero);
    // }

  ngOnInit(): void {
    // const cartItemsString:any = localStorage.getItem('cart');
    // this.cartItems=JSON.parse(this.items);
    this.cartItems=JSON.parse(localStorage.getItem('cart')??'') || [];
    this.user = JSON.parse(localStorage.getItem('user')??'');
    if(this.user){
      const num='%2B'+this.user.mobileNumber;
      console.log(num);}
    // console.log(this.hero);
    // this.cartItems=this.hero;
  }

  OTPConfirmationBox(){
    const lambdaFunctionURL='https://ef69rux27l.execute-api.ap-south-1.amazonaws.com/default/lambdaFunction';
    const toPhone='%2B91'+this.user?.mobileNumber;
    // const toPhone='%2B917011143448';
    
    this.http.post(lambdaFunctionURL,{toPhone}).subscribe(response=>{
      console.log(response);
    })

    this.dialog.open(OtpConfimationComponent);
  }

  // placedOrder(){

  //   this.orderservice.placedOrder(this.cartItems).subscribe(response=>{
  //     Swal.fire('Thank you','Order Placed Successfully');
  //     setTimeout(() => {
  //       localStorage.removeItem('cart');
  //     window.location.href="/menu";
  //     }, 3000);
  //   });
  // }

}
