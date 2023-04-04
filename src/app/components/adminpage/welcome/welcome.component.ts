import { Component,OnInit } from '@angular/core';
import { Mostorderesdishes } from '../../classes/mostorderesdishes';
import { Ratingdashboard } from '../../classes/ratingdashboard';
import { Restaurantpeekhours } from '../../classes/restaurantpeekhours';
import { Admindashboard } from '../../service/admindashboard.service';
import { OrderDashboard } from '../../classes/order-dashboard';
import { DatePipe } from '@angular/common';
import { OrderStatistics } from '../../classes/order-statistics';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  peekHours?:Restaurantpeekhours[];
  mostOrderedDish?:Mostorderesdishes[];
  ratingDashboard?:Ratingdashboard;
  orderDashboard?:OrderDashboard;
  orderStatistics?:OrderStatistics[];
  orderStatisticsButton?=false;
  showMore=false;
  orderDashboardButton=false;
  fromDate?:any;
  toDate?:any;

  constructor(private dashboard:Admindashboard,
    // private datePipe:DatePipe
    ) {}

  ngOnInit(): void {
    this.getRestaurantPeekHours();
    this.getMostOrderDishes();
    this.getRatingDahsboard();
    
    
  }

  getRestaurantPeekHours(){
    this.dashboard.restaurantPeekHours().subscribe(response=>{
      this.peekHours=response;
    })
  }

  getMostOrderDishes(){
    this.dashboard.threeMostOrderDishes().subscribe(response=>{
      this.mostOrderedDish=response
    })
  }

  getRatingDahsboard(){
    this.dashboard.ratingDahsboard().subscribe(r=>{
      this.ratingDashboard=r;
    })
  }

  getOrderDashboard(){
    // console.log(this.fromDate,this.toDate);
    // const formatedFromDate:any=this.datePipe.transform(fromDate,'yyyy/MM/dd');
    // const formatedToDate:any= this.datePipe.transform(toDate,'yyyy/MM/dd');

    this.dashboard.orderDashboard(this.fromDate,this.toDate).subscribe(response=>{
      this.orderDashboard=response;
    })
  }

  getOrderStatistics(){
    this.dashboard.orderStatistics(this.fromDate,this.toDate).subscribe(response=>{
      this.orderStatistics=response;
    })
  }

}
