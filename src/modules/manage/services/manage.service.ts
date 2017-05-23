import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { CoalPrice } from '../models/coalPrice.model';
import { Helper } from '../../common/services/helper.service';


@Injectable()
export class ManageService {
  headers: Headers;
  lantanPrices: CoalPrice[] = [];
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
    let api: string = this.helper.getAPI('notice');

    return this.http.get(api, this.requestOptions)
    .toPromise()
    .then((response) => {
      this.lantanPrices = response.json();
      // this.noCheckNotices = this.notices.filter((notice) => {
      //   return !Boolean(notice.is_checked);
      // })
      // this.events.publish('notice:getIndex', {num: this.noCheckNotices.length});
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
