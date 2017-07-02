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

  getUserList(data) {
    let api: string = this.helper.getAPP('user/getUserList');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  getInfostoreList(data) {
    let api: string = this.helper.getAPP('infoDepart/getInfoDepartmentList');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  saveOrUpdateInfostore(data) {
    let api: string = this.helper.getAPP('infoDepart/addOrUpdateInfoDepart');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  deleteInfostore(data) {
    let api: string = this.helper.getAPP('infoDepart/deleteInfoDepartment');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  getLogisticsList(data) {
    let api: string = this.helper.getAPP('infoDepart/getLogisticsList');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  saveOrUpdateLogistics(data) {
    let api: string = this.helper.getAPP('infoDepart/addOrUpdateLogisticsInfo');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  deleteLogistics(data) {
    let api: string = this.helper.getAPP('infoDepart/deleteLogistics');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }


  getLifestoreList(data) {
    let api: string = this.helper.getAPP('life/getLifeStoreList');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  saveOrUpdateLifestore(data) {
    let api: string = this.helper.getAPP('life/addOrUpdateLifeStore');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  deleteLifestore(data) {
    let api: string = this.helper.getAPP('life/deleteLifeStore');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  loadProductPriceList(params): Promise<CoalPrice> {
    let api: string = this.helper.getAPP('product/getProductPriceList');
    let data: Object = params;

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  loadNewsList(params) {
    let api: string = this.helper.getAPP('news/getDailyNewsList');
    let data: Object = params;

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  saveOrUpdateNews(data) {
    let api: string = this.helper.getAPP('news/addDailyNews');

    return this.http.post(api, data, this.requestOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  //
  // handle error
  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
