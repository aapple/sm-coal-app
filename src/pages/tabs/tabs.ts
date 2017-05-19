import { Component } from '@angular/core';
import { Events, Platform, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {PersonPage} from "../person-page/person-page";
import {CoalPricePage} from "../coal-price-page/coal-price-page";
import {LantanPricePage} from "../lantan-price-page/lantan-price-page";
import {InfoStorePage} from "../info-store-page/info-store-page";

import { TimelinePage } from '../../modules/timeline/pages/timeline';
import { TopicPage } from '../../modules/topic/pages/topic';
import { MePage } from '../../modules/user/pages/me';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CoalPricePage;
  tab2Root = LantanPricePage;
  tab3Root = InfoStorePage;
  tab4Root = MePage;


  // timelineTabRoot: any = TimelinePage;
  // topicTabRoot: any = TopicPage;
  // userTabRoot: any = MePage;

  constructor(
    public events: Events,
    public navCtrl: NavController) {

    this.subscribeEvents();
  }

  subscribeEvents() {
    // subscribe app gotoPage
    this.events.subscribe('app:gotoPage', (params) => {
      this.navCtrl.push(params.page);
    });
  }
}
