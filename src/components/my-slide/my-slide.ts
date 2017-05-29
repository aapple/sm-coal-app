import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-slide',
  templateUrl: 'my-slide.html'
})
export class MySlide {

  @Input("slides") slides: string[] = [];
  @Input("pageNumber") pageNumber: number = 5;
  @Output("slideClick") slideClick = new EventEmitter<number>();

  selectedIndex: number = 0;

  constructor() {
  }

  ngOnInit() {

  }

  onClick(index) {
    this.selectedIndex = index;
    this.slideClick.emit(index);
  }
}
