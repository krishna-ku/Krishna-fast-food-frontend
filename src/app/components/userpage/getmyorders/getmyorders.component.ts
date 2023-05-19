import { Component, OnInit } from '@angular/core';
import { Orders } from '../../classes/orders';
import { Orderservice } from '../../service/orderservice.service';
import { MatDialog } from '@angular/material/dialog';
import { GiveratingComponent } from '../getmyratings/postrating/giverating/giverating.component';
import { GetAllBillSComponent } from '../../commoncomponents/get-all-bill-s/get-all-bill-s.component';

@Component({
  selector: 'app-getmyorders',
  templateUrl: './getmyorders.component.html',
  styleUrls: ['./getmyorders.component.css']
})
export class GetmyordersComponent implements OnInit  {

  orders?:Orders[];
  isRated=false


  constructor(private orderservice:Orderservice,
    private dialog:MatDialog
    ) {}

  ngOnInit(): void {
    this.getMyOrders();
  }

  getMyOrders(){

    this.orderservice.getFilterOrders().subscribe(response=>{
      this.orders = response.sort((a:any, b:any) => b.orderId - a.orderId);
      
      if(this.orders?.length){
      localStorage.setItem('lastOrder',JSON.stringify(this.orders[0]));
      }
    })
  }

  giveRating(){
    this.dialog.open(GiveratingComponent)
    this.isRated=true;
  }

  getAllBills(){
    this.dialog.open(GetAllBillSComponent);
  }

}
