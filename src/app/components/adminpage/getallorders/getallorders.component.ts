import { Component, OnInit } from '@angular/core';
import { Orders } from '../../classes/orders';
import { Orderservice } from '../../service/orderservice.service';

@Component({
  selector: 'app-getallorders',
  templateUrl: './getallorders.component.html',
  styleUrls: ['./getallorders.component.css']
})
export class GetallordersComponent implements OnInit {

  orders?: Orders[];

  constructor(private orderservice: Orderservice) {}

  ngOnInit(): void {
   this.getAllOrders(); 
  }

  getAllOrders(){
    this.orderservice.getAllOrders().subscribe((response: any) => {
      this.orders=response.data;
    });
  }

}
