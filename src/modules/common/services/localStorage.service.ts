import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocalStorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocalStorageService {

  constructor(public http: Http) {
    console.log('Hello LocalStorageService Provider');
  }

  set(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  get(key: string) {
    let value: string = localStorage.getItem(key);

    if (value && value != "undefined" && value != "null") {
      return JSON.parse(value);
    }

    return null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

}
