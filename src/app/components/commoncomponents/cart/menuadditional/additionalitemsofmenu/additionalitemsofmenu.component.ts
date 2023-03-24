import { Component,OnInit } from '@angular/core';
import { Menuadditionalitems } from 'src/app/components/classes/menuadditionalitems';
import { Menuservice } from 'src/app/components/service/menuservice.service';

@Component({
  selector: 'app-additionalitemsofmenu',
  templateUrl: './additionalitemsofmenu.component.html',
  styleUrls: ['./additionalitemsofmenu.component.css']
})
export class AdditionalitemsofmenuComponent implements OnInit {


  additionalItems?:Menuadditionalitems[];


  constructor(private menuservice:Menuservice) {}

  ngOnInit(): void {
    this.getAdditionalItemsOfMenu();
  }

  getAdditionalItemsOfMenu(){

    this.menuservice.getAdditionalItemsOfMenu().subscribe(respons=>{
      this.additionalItems=respons
    })
  }

}
