import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { CoalPrice } from '../models/coalPrice.model';
import { Helper } from '../../common/services/helper.service';


@Injectable()
export class ManageService {
  headers: Headers;
  requestOptions: RequestOptions;

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

  getFactoryList(data) {
    let api: string = this.helper.getAPP('product/getFactoryList');

    return this.http.post(api, data, this.requestOptions)
    .toPromise()
    .then((response) => {
      return response.json();
    })
    .catch(this.handleError);
  }

  saveOrUpdateProductPrice(data) {
    let api: string = this.helper.getAPP('product/saveOrUpdateProductPrice');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  deleteFactory(data) {
    let api: string = this.helper.getAPP('product/deleteFactory');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  saveOrUpdateFactory(data) {
    let api: string = this.helper.getAPP('product/saveOrUpdateFactory');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  getUserList() {
    let api: string = this.helper.getAPP('user/getUserList');

    return this.http.post(api, null, this.requestOptions)
      .toPromise()
      .then((response) => {
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
