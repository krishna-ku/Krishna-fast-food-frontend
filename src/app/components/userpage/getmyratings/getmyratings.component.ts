import { Component,OnInit } from '@angular/core';
import { Rating } from '../../classes/rating';
import { Ratingservice } from '../../service/ratingservice.service';

@Component({
  selector: 'app-getmyratings',
  templateUrl: './getmyratings.component.html',
  styleUrls: ['./getmyratings.component.css']
})
export class GetmyratingsComponent implements OnInit {

  ratings?: Rating[];

  constructor(private ratingservice: Ratingservice) {}

  ngOnInit(): void {
    this.getMyRatings();
  }

  getMyRatings(){
    this.ratingservice.getFilterRatings().subscribe(response=>{
      this.ratings=response
    })
  }

}
