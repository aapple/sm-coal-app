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

  //
  // handle error
  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
