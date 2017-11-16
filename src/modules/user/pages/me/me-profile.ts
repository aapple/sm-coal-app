import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AppService } from '../../../common/services/app.service';
import { UserService } from '../../services/user.service';

import { MeProfileUpdatePage} from './me-profileUpdate';
import {TimelinePage} from '../../../timeline/pages/timeline'
import {LocalStorageService} from "../../../common/services/localStorage.service";

@Component({
  selector: 'page-me-profile',
  templateUrl: 'me-profile.html'
})
export class MeProfilePage {

  MeProfileUpdatePage = MeProfileUpdatePage;
  firstFlag = "0";


  //
  // constructor
  constructor(
    public heyApp: AppService,
    public userService: UserService,
    public navCtrl: NavController,
    public localStorageService: LocalStorageService,
  ) {

    this.firstFlag = this.localStorageService.get("firstFlag")

  }

  ionViewDidEnter() {

    this.heyApp.authService.getUser();
  }

  gotoTimeline(){
    this.navCtrl.popAll();
  }
}
