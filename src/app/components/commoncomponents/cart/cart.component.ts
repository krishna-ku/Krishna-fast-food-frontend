import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartItems: Array<{name: string, itemQuantity: number}> = [];

  ngOnInit(): void {
    console.log(this.cartItems);
    
  }

}
