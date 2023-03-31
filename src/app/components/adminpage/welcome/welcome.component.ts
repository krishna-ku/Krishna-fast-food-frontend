import { Component,OnInit } from '@angular/core';
import { Mostorderesdishes } from '../../classes/mostorderesdishes';
import { Ratingdashboard } from '../../classes/ratingdashboard';
import { Restaurantpeekhours } from '../../classes/restaurantpeekhours';
import { Admindashboard } from '../../service/admindashboard.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  peekHours?:Restaurantpeekhours[];
  mostOrderedDish?:Mostorderesdishes[];
  ratingDashboard?:Ratingdashboard;
  showMore=false;

  constructor(private dashboard:Admindashboard) {}

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

}
