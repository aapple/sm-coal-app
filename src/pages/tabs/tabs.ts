import { Component } from '@angular/core';
import { Events, Platform, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {PersonPage} from "../person-page/person-page";
import {CoalPricePage} from "../coal-price-page/coal-price-page";

import { TimelinePage } from '../../modules/timeline/pages/timeline';
import { TopicPage } from '../../modules/topic/pages/topic';
import { MePage } from '../../modules/user/pages/me';
import { CoalPage } from '../../modules/coal/pages/coal';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CoalPage;
  tab2Root = CoalPage;
  tab3Root = CoalPage;
  tab4Root = MePage;

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
