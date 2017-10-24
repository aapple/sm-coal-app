import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import { ImagePicker, Transfer, Camera } from 'ionic-native';

import { Timeline } from '../models/timeline.model';
import { TimelineImg } from '../models/timelineImg.model';

import { AppService } from '../../common/services/app.service';
import { TimelineService } from '../services/timeline.service';


@Component({
  selector: 'page-timeline-create',
  templateUrl: 'timeline-create.html',
})
export class TimelineCreatePage {
  newTimeline: {content?: string} = {};

  //
  waiting: boolean = false;

  //
  imgs: TimelineImg[] = [];

  //
  video: any;

  //
  imgIdArr: number[] = [];

  timeline: Timeline;

  timelineType: string = "3";

  pageTitle: string = "新鲜事";


  //
  // constructor
  constructor(
    public heyApp: AppService,
    public timelineService: TimelineService,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {

    this.timelineType = navParams.data.timelineType;

    if(this.timelineType == "1"){
      this.pageTitle = "煤炭";
    } else if(this.timelineType == "2"){
      this.pageTitle = "物流";
    } else {
      this.pageTitle = "新鲜事";
    }
  }


  //
  // timeline create handler
  timelineCreateHandler(ngForm) {
    console.log(this.imgIdArr, ngForm.value.content, this.video);
    if (this.imgs.length || ngForm.value.content || this.video) {
      if (this.waiting) {
        let params = {
          title: "请等待",
          subTitle: "正在等待图片或者视频上传",
        }

        this.heyApp.utilityComp.presentAlter(params);
      } else {
        this.heyApp.utilityComp.presentLoading();

        let data: any = {
          content: ngForm.value.content,
          timelineType: this.timelineType,
          imgs: this.imgs,
          video: this.video ? this.video.id : null,
        };

        this.timelineService.store(data)
          .then((newTimeline: Timeline) => {
            this.heyApp.utilityComp.dismissLoading();
            this.dismiss();
          });
      }
    } else {
      let params = {
        title: "提示",
        subTitle: "随便分享点什么",
      }

      this.heyApp.utilityComp.presentAlter(params);
    }
  }


  //
  // video play
  videoPlay(event) {
    if (event.srcElement.paused) {
      event.srcElement.play();
    } else {
      event.srcElement.pause();
    }
  }


  //
  // upload imgs by native camera
  uploadImgsByNativeCamera(type) {
    let options = {
      quality: 60,
      saveToPhotoAlbum: true,
      sourceType: 1,
      mediaType: 0,
      targetWidth: 1200,
      targetHeight: 1600,
    };
    if (type === 'library') {
      options.quality = 100;
      options.saveToPhotoAlbum = false;
      options.sourceType = 0;
      options.mediaType = 2;
    }

    Camera.getPicture(options).then((result) => {
      this.waiting = true;

      this.heyApp.utilityComp.presentLoading();
      console.log('the file', result);
      this.uploadFileByFileTransfer(result, this.heyApp.fileUploadService.imageUploadAPI);
    }, (err) => {
      console.log('Camera getPictures err', err);
    });
  }


  //
  // upload imgs by native library
  uploadImgsByNativeLibrary() {
    let options = {
      width: 1200,
      height: 1600,
    };
    ImagePicker.getPictures(options).then((results) => {
      this.waiting = true;


      for (var i = 0; i < results.length; i++) {
        this.heyApp.utilityComp.presentLoading();
        this.uploadFileByFileTransfer(results[i], this.heyApp.fileUploadService.imageUploadAPI);
      }
    }, (err) => {
      console.log('ImagePIcker getPictures err', err);
    });
  }

  //
  // upload imgs by file transfer
  uploadFileByFileTransfer(file, api) {
    const fileTransfer = new Transfer();
    let options: any;
    options = {
      fileKey: 'file',
      fileName: file.replace(/^.*[\\\/]/, ''),
      headers: {},
    }

    fileTransfer.upload(file, api, options)
      .then((ret) => {
        this.waiting = false;

        this.heyApp.utilityComp.dismissLoading();
        let result = [{"uri": ret.response}];
        // merge imgs
        this.mergeImgs(result);
      }, (err) => {
        this.heyApp.utilityComp.dismissLoading();
        this.waiting = false;
      })
  }


  //
  // upload imgs
  uploadImgs(event) {

    this.heyApp.utilityComp.presentLoading();
    this.waiting = true;
    let files = event.srcElement.files;

    this.heyApp.fileUploadService.upload(this.heyApp.fileUploadService.imageUploadAPI, files).then(data => {
      this.waiting = false;

      this.heyApp.utilityComp.dismissLoading();
      let result = [{"uri": data}];
      // merge imgs
      this.mergeImgs(result);
    }, () => {
      this.waiting = false;
      this.heyApp.utilityComp.dismissLoading();
    });
  }


  //
  // merge Imgs
  mergeImgs(imgs) {
    this.video = null;

    for (let i = 0; i < imgs.length; i++) {
      //this.imgIdArr = this.imgIdArr.concat(imgs[i]['id']);
      this.imgs = this.imgs.concat(imgs[i]);
    }
  }


  //
  // upload video
  uploadVideo(event) {
    this.waiting = true;
    let files = event.srcElement.files;
    this.video = null;

    this.heyApp.fileUploadService.upload(this.timelineService.timelineStoreVideoAPI, files).then(data => {
      this.waiting = false;
      this.imgs = data.imgs;
      this.video = data;
      this.imgIdArr = [];
    }, () => {
      this.waiting = false;
    });
  }


  //
  // dismiss
  dismiss() {
    this.viewCtrl.dismiss();
  }


}
