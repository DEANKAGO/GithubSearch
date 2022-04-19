import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'blue'
   }

}

