import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Money pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'money',
})
export class Money implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase() + " pipe";
  }
}
