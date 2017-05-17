import { Component } from '@angular/core';
import { App } from 'ionic-angular';


@Component({
  selector: 'book',
  templateUrl: 'book.html'
})
export class BookComponent {

  constructor(public appCtrl: App) {

  }

}
