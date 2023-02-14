import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedColor]'
})
export class RedColorDirective {

  constructor(er:ElementRef) {
    er.nativeElement.style.color="red";
   }

}
