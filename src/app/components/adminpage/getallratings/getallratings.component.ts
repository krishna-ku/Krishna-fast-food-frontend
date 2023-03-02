import { Component, OnInit } from '@angular/core';
import { Rating } from '../../classes/rating';
import { Ratingservice } from '../../service/ratingservice.service';

@Component({
  selector: 'app-getallratings',
  templateUrl: './getallratings.component.html',
  styleUrls: ['./getallratings.component.css']
})
export class GetallratingsComponent implements OnInit {

  ratings?: Rating[];

  constructor(private ratingservice: Ratingservice) {}

  ngOnInit(): void {
    this.getAllRatings();
  }

  getAllRatings(){

    this.ratingservice.getAllRatings().subscribe(response=>{
      this.ratings=response.data;
    })
  }

}
