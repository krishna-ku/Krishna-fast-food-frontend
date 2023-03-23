import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/components/classes/restaurant';
import { RestaurantService } from 'src/app/components/service/restaurantservice.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurant?:Restaurant;

  editMode=false;

  constructor(private restaurantservice:RestaurantService) {}

  ngOnInit(): void {
    this.getRestaurantDetails();
  }


  getRestaurantDetails(){

    return this.restaurantservice.getRestaurantInfo().subscribe(response=>{
      this.restaurant=response;
    })
  }

  updateRestaurant(){

    return this.restaurantservice.updateRestaurantDetails(this.restaurant).subscribe();
  }


}
