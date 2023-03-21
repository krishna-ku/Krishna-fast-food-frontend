import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Rating } from 'src/app/components/classes/rating';
import { Ratingservice } from 'src/app/components/service/ratingservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-giverating',
  templateUrl: './giverating.component.html',
  styleUrls: ['./giverating.component.css']
})
export class GiveratingComponent implements OnInit {

  ratingForm!:FormGroup;


  constructor(
    private formBuilder:FormBuilder,
    private ratingService:Ratingservice,
    private dialog:MatDialog,
    ) {}

  ngOnInit(): void {
    this.ratingForm=this.formBuilder.group({
      rating: [''],
      review:['',[Validators.required,Validators.maxLength(100),Validators.pattern(`^[a-zA-Z ]+$`)]],
    });
    
  }

  onSubmit(){
    if(this.ratingForm.valid){
      const rating:Rating=this.ratingForm.value;
      console.log(rating);
      
      this.ratingService.giveRating(rating).subscribe(()=>{
        Swal.fire('Thank your','For Rate Us')
        this.dialog.closeAll()
      },
      (error)=>{
        console.log('Error occurred while submitting rating:', error);
        Swal.fire('Error', 'Failed to submit rating. Please try again later.', 'error'); 
      }
      );
    }
  }

}
