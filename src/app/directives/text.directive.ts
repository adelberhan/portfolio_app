import { Directive, ElementRef, Input } from '@angular/core';
import Typed from 'typed.js';

@Directive({
  selector: '[appText]',
})
export class TextDirective {
  @Input('appTyped') typedItems: string = '';

  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    const typedStrings = this.typedItems.split(',');
    new Typed(this.el.nativeElement, {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
}
