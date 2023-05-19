import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { BillService } from '../../service/bill-service.service';

@Component({
  selector: 'app-get-all-bill-s',
  templateUrl: './get-all-bill-s.component.html',
  styleUrls: ['./get-all-bill-s.component.css']
})
export class GetAllBillSComponent {

  constructor(private billService:BillService) {}

  fileNames: string[]=[];

  ngOnInit(): void{
    this.getBills();
  }

  getBills(){

    this.billService.getAllBillS().subscribe(data=>{
      
      this.fileNames=data;

    })

  }

  downloadBill(bill:string){

    return this.billService.downloadBills(bill).subscribe( (data:Blob)=>{

      saveAs(data,'bill.pdf');
    },
    (error)=>{
      console.error('Error occurred while downloading the bill: ',error);
      
    }
    );

  }

}
