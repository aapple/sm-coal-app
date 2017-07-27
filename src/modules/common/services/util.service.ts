import { Injectable } from '@angular/core';
import {Platform, AlertController} from 'ionic-angular';
import {AppVersion, Transfer, FileOpener, File, InAppBrowser} from 'ionic-native';
import {UtilityComponent} from "../pages/utilityComponent";


@Injectable()
export class UtilService {

  //
  // constructor
  constructor(
    public alertCtrl: AlertController,
    public platform: Platform,
    public utilityComp: UtilityComponent
  ) {
  }

  /**
   * 下载安装app
   */
  downloadApp(upgradeUrl) {
    if (this.isAndroid()) {
      let alert = this.alertCtrl.create({
        title: '下载进度：0%',
        enableBackdropDismiss: false,
        buttons: ['后台下载']
      });
      alert.present();

      const fileTransfer = new Transfer();
      const apk = File.externalRootDirectory + 'android.apk'; //apk保存的目录
      // const apk = "";
      fileTransfer.download(upgradeUrl, apk).then(() => {
        // window['install'].install(apk.replace('file://', ''));
        FileOpener.open(apk, 'application/vnd.android.package-archive').then(
          ()=>{
          });
      });

      fileTransfer.onProgress((event: ProgressEvent) => {
        let num = Math.floor(event.loaded / event.total * 100);
        if (num === 100) {
          alert.dismiss();
        } else {
          let title = document.getElementsByClassName('alert-title')[0];
          title && (title.innerHTML = '下载进度：' + num + '%');
        }
      });
    }
    if (this.isIos()) {
      this.openUrlByBrowser(upgradeUrl);
    }
  }

  /**
   * 通过浏览器打开url
   */
  openUrlByBrowser(url:string):void {
    let browser = new InAppBrowser(url, '_system');
    browser.show();
  }

  /**
   * 是否真机环境
   * @return {boolean}
   */
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   * @return {boolean}
   */
  isAndroid(): boolean {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios真机环境
   * @return {boolean}
   */
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }

  /**
   * 获得app版本号,如0.01
   * @description  对应/config.xml中version的值
   * @returns {Promise<string>}
   */
  getVersionNumber(): Promise<string> {
    return new Promise((resolve) => {
      AppVersion.getVersionNumber().then((value: string) => {
        resolve(value);
      }).catch(err => {
        console.log('getVersionNumber:' + err);
      });
    });
  }

  shareWxSession(share){
    let wechat = (<any>window).Wechat;
    wechat.isInstalled(function (installed) {
      if(!installed){
        this.utilityComp.presentToast('您没有安装微信！');
        return ;
      }
    }, function (reason) {
      this.toastService.show("Failed: " + reason);
    });
    wechat.share({
      message: {
        title: share.shareTitle,
        description: share.shareDesc,
        thumb: share.shareImg,
        media: {
          type: wechat.Type.LINK,
          webpageUrl: share.shareUrl
        }
      },
      scene: wechat.Scene.SESSION   // share to SESSION
    }, function () {
      this.utilityComp.presentToast('分享成功');
    }, function (reason) {
      console.log("Failed: " + reason);
    });
  }

  shareWxTimeLine(share){
    let wechat = (<any>window).Wechat;
    wechat.isInstalled(function (installed) {
      if(!installed){
        this.utilityComp.presentToast('您没有安装微信！');
        return ;
      }
    }, function (reason) {
      this.toastService.show("Failed: " + reason);
    });
    wechat.share({
      message: {
        title: share.shareTitle,
        description: share.shareDesc,
        thumb: share.shareImg,
        media: {
          type: wechat.Type.LINK,
          webpageUrl: share.shareUrl
        }
      },
      scene: wechat.Scene.TIMELINE   // share to Timeline
    }, function () {
      this.utilityComp.presentToast('分享成功');
    }, function (reason) {
      console.log("Failed: " + reason);
    });

  }

}
