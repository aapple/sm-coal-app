import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Helper } from '../../common/services/helper.service';


@Injectable()
export class HomeService {
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


  loadLifestoreList(params) {
    let api: string = this.helper.getAPP('life/getLifeStoreList');
    let data: Object = params;

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  loadNewsList(params) {
    let api: string = this.helper.getAPP('news/getDailyNewsList?pageNumber=' + params.pageNumber);

    return this.http.get(api, this.requestOptions)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  loadNoticeList(params) {
    let api: string = this.helper.getAPP('news/getTrafficInfoList?pageNumber=' + params.pageNumber);

    return this.http.get(api, this.requestOptions)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  loadTrafficList(params) {
    let api: string = this.helper.getAPP('traffic/getTrafficInfoList?pageNumber=' + params.pageNumber);

    return this.http.get(api, this.requestOptions)
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
