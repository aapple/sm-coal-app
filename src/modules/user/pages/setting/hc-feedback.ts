import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService} from "../../services/user.service";
import {AppService} from "../../../common/services/app.service";


@Component({
  selector: 'page-hc-feedback',
  templateUrl: 'hc-feedback.html'
})
export class HCFeedbackPage {


  feedbackText: string = "";

  //
  // constructor
  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public heyApp: AppService
  ) {
  }

  onSubmit() {

    if(!this.feedbackText.trim()){
      this.heyApp.utilityComp.presentToast("请输入内容以后再提交！");
    }
    let data = {
      feedbackText: this.feedbackText
    }
    this.userService.feedback(data)
      .then((response) => {
        this.heyApp.utilityComp.presentToast(response.text());
        this.navCtrl.pop();
      });
  }
}
