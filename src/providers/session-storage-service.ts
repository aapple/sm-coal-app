import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SessionStorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SessionStorageService {

  constructor(public http: Http) {
    console.log('Hello SessionStorageService Provider');
  }

  write(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value);
  }

  read<T>(key: string): T {
    let value: string = sessionStorage.getItem(key);

    if (value && value != "undefined" && value != "null") {
      return <T>JSON.parse(value);
    }

    return null;
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }

}
