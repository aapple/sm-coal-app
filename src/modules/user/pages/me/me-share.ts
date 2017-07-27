import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppService } from '../../../common/services/app.service';

import { HCDebugPage } from './hc-debug';
import {UtilService} from "../../../common/services/util.service";
import {ShareModel} from "../../../common/models/ShareModel";
import {ImageViewerController} from "ionic-img-viewer";


@Component({
  selector: 'page-me-share',
  templateUrl: 'me-share.html'
})
export class MeSharePage {

  //
  // constructor
  constructor(
    public heyApp: AppService,
    public navCtrl: NavController,
    public utilService: UtilService
  ) {
  }


  shareWxSession(){
    let share = new ShareModel();
    share.shareTitle = "神木煤炭";
    share.shareDesc = "神木煤炭App，发现优质煤炭！";
    share.shareImg = "http://or0qspriu.bkt.clouddn.com/201707262005541hFuLEw33Tv.png?imageView/2/w/200";
    share.shareUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.ionicframework.smcoalapp562696";
    this.utilService.shareWxSession(share);
  }

  shareWxTimeLine(){
    let share = new ShareModel();
    share.shareTitle = "神木煤炭";
    share.shareDesc = "神木煤炭App，发现优质煤炭！";
    share.shareImg = "http://or0qspriu.bkt.clouddn.com/201707262005541hFuLEw33Tv.png?imageView/2/w/200";
    share.shareUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.ionicframework.smcoalapp562696";
    this.utilService.shareWxTimeLine(share);
  }

}
