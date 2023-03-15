import { Component, OnInit } from '@angular/core';
import { Orders } from '../../classes/orders';
import { Orderservice } from '../../service/orderservice.service';

@Component({
  selector: 'app-getmyorders',
  templateUrl: './getmyorders.component.html',
  styleUrls: ['./getmyorders.component.css']
})
export class GetmyordersComponent implements OnInit  {

  orders?:Orders[];


  constructor(private orderservice:Orderservice) {}

  ngOnInit(): void {
    this.getMyOrders();
  }

  getMyOrders(){

    this.orderservice.getFilterOrders().subscribe(response=>{
      this.orders=response;
    })
  }

}
