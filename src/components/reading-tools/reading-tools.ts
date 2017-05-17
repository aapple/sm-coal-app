import { Component } from '@angular/core';

/*
  Generated class for the ReadingTools component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
 selector: 'reading-tools',
 templateUrl: 'reading-tools.html'
})
export class ReadingToolsComponent {

 background: string;

 colorOptions: any = [
  {
   name: 'white',
   bg: 'rgb(255, 255, 255)',
   fg: 'rgb(0, 0, 0)'
  },
  {
   name: 'tan',
   bg: 'rgb(249, 241, 228)',
   fg: 'rgb(0, 0, 0)'
  },
  {
   name: 'grey',
   bg: 'rgb(76, 75, 80)',
   fg: 'rgb(255, 255, 255)'
  },
  {
   name: 'black',
   bg: 'rgb(0, 0, 0)',
   fg: 'rgb(255, 255, 255)'
  },
 ];

 fontOptions: any = [
  {
   title: 'Times New Roman',
   fontFamily: 'Times New Roman'
  },
  {
   title: 'Sans Serif',
   fontFamily: 'sans-serif'
  }
 ];

 constructor() {
 }

 ngOnInit() {
  this.background = 'white';
 }

 changeFontFamily() {

 }

 changeFontSize() {

 }

 changeBackground() {

 }


}
