import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppService } from '../../common/services/app.service';
import { TimelineService } from '../services/timeline.service';
import{ UtilService } from '../../common/services/util.service';
import{ ShareModel } from '../../common/models/ShareModel';

import { TimelineDetailPage } from './timeline-detail';
import { TimelineCreatePage } from './timeline-create';


@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  //
  // constructor
  constructor(
    public timelineService: TimelineService,
    public heyApp: AppService,
    public utilService: UtilService,
    public navCtrl: NavController,
  ) {
    console.log('Hey Timeline ~');

    this.timelineService.getTimelinesFromStorage();
  }


  //
  // ion view did enter
  ionViewDidEnter() {
    // get timelines
    this.timelineService.index();
  }

  onSegmentClick(){
    this.timelineService.index();
  }


  //
  // goto timeline detail page
  gotoTimelineDetailPage(timeline, index) {
    this.navCtrl.push(TimelineDetailPage, {timeline: timeline, timelineIndex: index});
  }

  showTimelineAll(index){
    this.timelineService.timelines[index].isAll = !this.timelineService.timelines[index].isAll;
  }

  formatContent(content, isAll){
    if(!isAll && content){
      content = content.substring(0, 100);
    }

    return content;
  }

  //
  // set like for timeline
  setLikeForTimeline(timeline) {
    if (this.heyApp.authService.authOrLogin()) {
      this.timelineService.setLike(timeline)
      .then(newTimeline => {
        timeline.is_like = newTimeline.is_like;
        timeline.like_num = newTimeline.like_num;
      });
    }
  }

  //
  // present timeline create modal
  presentTimelineCreateModal(timelineType) {
    let me = this;
    if (this.heyApp.authService.authOrLogin()) {
      let page = TimelineCreatePage;
      let params = {"timelineType": timelineType}
      let callback = function() {
        me.timelineService.index();
      }

      this.heyApp.utilityComp.presentModal(page, params, callback);
    }
  }

  presentActionSheet(timeline, index) {

    let share = new ShareModel();
    share.shareTitle = timeline.content;
    share.shareDesc = "神木煤炭App，发现优质煤炭！";
    share.shareImg = "http://or0qspriu.bkt.clouddn.com/201707262005541hFuLEw33Tv.png?imageView/2/w/200";
    share.shareUrl = "http://coalapp.smmeitan.cn/share.html?timelineId=" + timeline.id;

    let title = '分享';

    let buttons = [{
      text: '取消',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    },{
      text: '分享到微信好友',
      handler: () => {
        this.utilService.shareWxSession(share);
      }
    },{
      text: '分享到微信朋友圈',
      handler: () => {
        this.utilService.shareWxTimeLine(share);
      }
    }];

    this.heyApp.utilityComp.presentActionSheet(title, buttons);
  }


  //
  //
  videoPlay(event) {
    if (event.srcElement.paused) {
      event.srcElement.play();
    } else {
      event.srcElement.pause();
    }
  }


  //
  // Refresh
  doRefresh(refresher) {
    let timeline = this.timelineService.timelines[0];
    let params: any = {
      id: timeline ? timeline.id : 0,
    }

    this.timelineService.refresh(params)
    .then(timelines => {
      refresher.complete();
    }, ret => {
      refresher.complete();
    });
  }


  //
  // Infinite
  doInfinite(infiniteScroll) {
    let length = this.timelineService.timelines.length;
    let params: any = {
      id: length ? this.timelineService.timelines[length - 1].id : 0,
    }

    this.timelineService.infinite(params)
    .then(timelines => {
      infiniteScroll.complete();
    }, ret => {
      infiniteScroll.complete();
    });
  }
}
