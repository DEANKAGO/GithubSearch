import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  @HostListener('mouseover') onMouseover(){
    this.highlight("#424242")
  }

  @HostListener('mouseleave') onMouseleave(){
    this.highlight("#1976D2")
  }

  private highlight(action:string){
    this.elem.nativeElement.style.backgroundColor=action;
  }

  constructor(private elem: ElementRef) {}

}

