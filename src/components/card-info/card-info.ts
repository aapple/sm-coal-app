import { Component } from '@angular/core';

/**
 * Generated class for the CardInfo component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'card-info',
  templateUrl: 'card-info.html'
})
export class CardInfo {

  text: string;

  constructor() {
    console.log('Hello CardInfo Component');
    this.text = '煤炭网APP';
  }

}
