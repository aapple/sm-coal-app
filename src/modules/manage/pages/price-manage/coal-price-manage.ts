import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../../common/services/app.service';
import { ManageService } from '../../services/manage.service';

/**
 * Generated class for the CoalPriceManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-coal-price-manage',
  templateUrl: 'coal-price-manage.html',
})
export class CoalPriceManagePage {

  productPrice: any = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public heyApp: AppService,
    public manageService: ManageService) {

    this.productPrice = navParams.data;
  }

  ionViewDidLoad() {

  }

  uploadImg(event, imagesName) {
    this.heyApp.utilityComp.presentLoading();
    let files = event.srcElement.files;

    this.heyApp.fileUploadService.upload(this.heyApp.fileUploadService.imageUploadAPI, files)
      .then(data => {
        this.productPrice[imagesName] = data;
        this.heyApp.utilityComp.dismissLoading();
      }, () => {
        this.heyApp.utilityComp.dismissLoading();
      });
  }

  onSubmit() {

    this.manageService.saveOrUpdateProductPrice(this.productPrice)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("提交成功");
        this.navCtrl.pop();
      });
  }

}
