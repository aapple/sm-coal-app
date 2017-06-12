import { Component } from '@angular/core';
import { Events, Platform, NavController } from 'ionic-angular';

import { MePage } from '../../modules/user/pages/me';
import { CoalPage } from '../../modules/coal/pages/coal';
import { InfostorePage } from '../../modules/infostore/pages/infostore';
import {HomePage} from "../../modules/home/pages/home";
import {LogisticsPage} from "../../modules/infostore/pages/logistics";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CoalPage;
  tab3Root = CoalPage;
  tab4Root = InfostorePage;
  tab5Root = MePage;
  tab6Root = LogisticsPage;

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
