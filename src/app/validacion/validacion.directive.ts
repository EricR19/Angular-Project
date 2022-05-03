import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[stringOnly]'
})
export class ValidacionDirective {

  constructor(private readonly el: ElementRef) { }

  @HostListener('input', ['$event'])
  onChangeInput(event: Event): void{
    console.log(this.el.nativeElement.value)
    const stringOnly = /[^a-zA-Z]*$/g;
    const initValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initValue.replace(stringOnly, '')
    if(initValue !== this.el.nativeElement.value){
      event.stopPropagation();
    }
  }
}
