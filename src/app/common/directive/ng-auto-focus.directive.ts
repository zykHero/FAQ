import { Directive,ElementRef,ViewChild } from '@angular/core';

@Directive({
  selector: '[appNgAutoFocus]'
})
export class NgAutoFocusDirective {
  constructor(private ele:ElementRef) 
  {
    setTimeout(() => {
      document.getElementById('editInput').focus();
    }, 0);
    
  }
}
