import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Infostore } from '../models/infosore.model';
import { Helper } from '../../common/services/helper.service';


@Injectable()
export class InfostoreService {
  headers: Headers;
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
  getInfoDepartmentList() {
    let api: string = this.helper.getAPP('infoDepart/getInfoDepartmentList');

    return this.http.get(api, this.requestOptions)
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
