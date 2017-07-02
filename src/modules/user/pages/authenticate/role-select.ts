import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import {UserService} from "../../services/user.service";
import {AppService} from "../../../common/services/app.service";

/**
 * Generated class for the AreaList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-role-select',
  templateUrl: 'role-select.html',
})
export class RoleSelectPage {

  curentValue: 1;
  items: any = [{name:"煤炭买家",value:"1"},{name:"煤炭卖家",value:"2"},{name:"货车司机",value:"3"}];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public heyApp: AppService,
    public userService: UserService,
    public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaList');
  }

  itemSelected(item) {

    this.curentValue = item.value;
  }

  cancelModal() {
    this.viewCtrl.dismiss();
  }

  onSubmit(){

    this.viewCtrl.data.role = this.curentValue;
    this.userService.update(this.viewCtrl.data)
      .then((response) => {
        this.heyApp.authService.logIn(this.viewCtrl.data);
        this.viewCtrl.dismiss();
      });
  }

}
