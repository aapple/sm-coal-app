import {ErrorHandler, Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {UtilityComponent} from "../pages/utilityComponent";


@Injectable()
export class MyErrorHandler implements ErrorHandler{

  // constructor
  constructor(
    public utilityComp: UtilityComponent
  ) {

  }

  handleError(err: any): void {

    if(err.rejection && err.rejection.status == 0) {

      this.utilityComp.presentToast('网络连接异常，请检查网络！');

    } else if(err.rejection && err.rejection._body ) {

      this.utilityComp.presentToast(err.rejection._body);
    }

  }
}
