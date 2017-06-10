import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../models/user.model';

import { AppService } from '../../common/services/app.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'page-me-profileUpdate',
  templateUrl: 'me-profileUpdate.html',
})
export class MeProfileUpdatePage {
  @ViewChild('inputAvatar') inputAvatarEl;

  //
  item: string;
  isUpdated: string = '';
  userInfo: User;


  //
  //
  constructor(
    public heyApp: AppService,
    public userService: UserService,
    public navParams: NavParams,
    public navCtrl: NavController
  ) {
    this.item = this.navParams.get('item');
    this.userInfo = this.heyApp.authService.userInfo;
  }


  //
  //
  onsubmit() {
    if (this.isUpdated) {

      this.userService.update(this.userInfo)
      .then((response) => {
        this.heyApp.authService.reset(response);
      });
    }

    this.navCtrl.pop();
  }

  selectAvatar() {
    this.inputAvatarEl.nativeElement.click();
  }


  //
  //
  uploadAvatar(event) {
    this.heyApp.utilityComp.presentLoading();
    let files = event.srcElement.files;

    this.heyApp.fileUploadService.upload(this.userService.userUpdateAvatarAPI, files)
      .then(data => {
        this.userInfo.avatar = data;
        this.heyApp.authService.reset(this.userInfo);
        this.userService.update(this.userInfo)
          .then((response) => {
            this.heyApp.authService.reset(response);
          });
        this.heyApp.utilityComp.dismissLoading();
        this.heyApp.utilityComp.presentToast('头像上传成功！');
    }, () => {
        this.heyApp.utilityComp.dismissLoading();
        this.heyApp.utilityComp.presentToast('头像上传失败！');
    });
  }
}
