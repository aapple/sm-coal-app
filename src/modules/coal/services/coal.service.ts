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
  getProductList(params): Promise<CoalPrice> {
    let api: string = this.helper.getAPP('coalIndustry/getCurrentProds');
    let data: Object = params;

    return this.http.post(api, data, this.requestOptions)
    .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  //
  // handle error
  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
