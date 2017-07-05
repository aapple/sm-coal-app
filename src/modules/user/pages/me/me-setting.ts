import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Platform, AlertController} from 'ionic-angular';
import {AppVersion, Transfer, FileOpener, File, InAppBrowser} from 'ionic-native';


import { AppService } from '../../../common/services/app.service';
import { UserService } from '../../services/user.service';
import { TimelineService } from '../../../timeline/services/timeline.service';

import { HCAboutPage } from '../setting/hc-about';
import { HCGuidePage } from '../setting/hc-guide';
import { HCFeedbackPage } from '../setting/hc-feedback';

@Component({
  selector: 'page-setting',
  templateUrl: 'me-setting.html'
})
export class MeSettingPage {
  HCAboutPage = HCAboutPage;
  HCGuidePage = HCGuidePage;
  HCFeedbackPage = HCFeedbackPage;
  appVersion = (window as any).APP_VERSION;


  //
  // constructor
  constructor(
    public heyApp: AppService,
    public timelineService: TimelineService,
    public navCtrl: NavController,
    public userService: UserService,
    public alertCtrl: AlertController,
    public platform: Platform
  ) {
  }


  //
  // goto log out
  gotoLogOut() {

    this.heyApp.authService.logOut();
    this.navCtrl.pop();
  }


  //
  // clear cache
  clearCacheHandler() {
    this.timelineService.timelines = [];
    this.timelineService.clearCache();
    this.heyApp.utilityComp.presentToast('清空缓存成功');
  }

  updateApp(){
    this.heyApp.utilityComp.presentToast('您的软件已是最新版本！');

    this.detectionUpgrade();
  }

  /**
   * 检查app是否需要升级
   */
  detectionUpgrade() {
    //这里连接后台获取app最新版本号,然后与当前app版本号(this.getVersionNumber())对比
    //版本号不一样就需要申请,不需要升级就return
    this.alertCtrl.create({
      title: '升级',
      subTitle: '发现新版本,是否立即升级？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            this.downloadApp();
          }
        }
      ]
    }).present();
  }

  /**
   * 下载安装app
   */
  downloadApp() {
    if (this.isAndroid()) {
      let alert = this.alertCtrl.create({
        title: '下载进度：0%',
        enableBackdropDismiss: false,
        buttons: ['后台下载']
      });
      alert.present();

      const fileTransfer = new Transfer();
      const apk = File.externalRootDirectory + 'android.apk'; //apk保存的目录

      let downloadUrl = "http://app.smmeitan.cn/assets/android-release.apk";
      fileTransfer.download(downloadUrl, apk).then(() => {
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
      //this.openUrlByBrowser(APP_DOWNLOAD);
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
      this.appVersion.getVersionNumber().then((value: string) => {
        resolve(value);
      }).catch(err => {
        console.log('getVersionNumber:' + err);
      });
    });
  }
}
