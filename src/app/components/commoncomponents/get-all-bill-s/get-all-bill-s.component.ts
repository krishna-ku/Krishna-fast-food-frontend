import { Component, OnInit } from '@angular/core';
import { BillService } from '../../service/bill-service.service';

@Component({
  selector: 'app-get-all-bill-s',
  templateUrl: './get-all-bill-s.component.html',
  styleUrls: ['./get-all-bill-s.component.css']
})
export class GetAllBillSComponent {

  constructor(private billService:BillService) {}

  fileNames: String[]=[];

  ngOnInIt(): void{
    this.getBills();
  }

  getBills(){

    this.billService.getAllBillS().subscribe(data=>{
      
      this.fileNames=data;

    })

  }

}
