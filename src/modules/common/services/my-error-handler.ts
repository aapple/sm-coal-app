import {ErrorHandler, Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { System } from '../models/system.model';
import { Helper } from './helper.service';
import {UtilityComponent} from "../pages/utilityComponent";


@Injectable()
export class MyErrorHandler implements ErrorHandler{

  // constructor
  constructor(
    public utilityComp: UtilityComponent
  ) {

  }

  handleError(err: any): void {
    if(err.rejection || err.rejection.status == 0) {
      this.utilityComp.presentToast('网络连接异常，请检查网络！');
    }
  }
}
