import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { CoalPrice } from '../models/coalPrice.model';
import { Helper } from '../../common/services/helper.service';


@Injectable()
export class CoalService {
  headers: Headers;
  coalPrices: CoalPrice[] = [];
  requestOptions: RequestOptions;

  userUpdateAvatarAPI: string = this.helper.getAPI('user/update-avatar');


  //
  // constructor
  constructor(
    private events: Events,
    private http: Http,
    private helper: Helper
  ) {
    this.headers = new Headers({'X-Requested-With': 'XMLHttpRequest'});
    this.requestOptions = new RequestOptions({headers: this.headers, withCredentials: true});
  }


  //
  // get index
  getIndex(): Promise<CoalPrice> {
    let api: string = this.helper.getAPP('login/login?phoneNum=11&verifyCode=111');

    return this.http.get(api, this.requestOptions)
    .toPromise()
    .then((response) => {
      //this.coalPrices = response.json();
      console.log(response.json());
      return response.json();
    })
    .catch(this.handleError);
  }

  testCokkie(): Promise<CoalPrice> {
    let api: string = this.helper.getAPP('login/testCookie');

    return this.http.get(api, this.requestOptions)
      .toPromise()
      .then((response) => {
        //this.coalPrices = response.json();
        console.log(response.json());
        return response.json();
      })
      .catch(this.handleError);
  }


  //
  // handle error
  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
