import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LocalStorageService} from "./local-storage-service";
import {SessionStorageService} from "./session-storage-service";

/*
  Generated class for the StorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageService {

  constructor(public http: Http, public localStorageService: LocalStorageService, public sessionStorageService: SessionStorageService) {
    console.log('Hello StorageService Provider');
  }

  writeUserInfo(value: any) {
    this.localStorageService.write("userInfo", value);
  }

  readUserInfo() {
    return this.localStorageService.read("userInfo");
  }

  clearUserInfo() {
    this.localStorageService.remove("userInfo");
  }

  writeLoginFlag(value: boolean) {
    this.sessionStorageService.write("isLogin", value);
  }

  readLoginFlag() {
    return this.sessionStorageService.read("isLogin");
  }

  clearLoginFlag() {
    this.sessionStorageService.remove("isLogin");
  }


}
