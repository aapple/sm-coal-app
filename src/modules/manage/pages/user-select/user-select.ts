import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ManageService} from "../../services/manage.service";

/**
 * Generated class for the UserSelect page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-user-select',
  templateUrl: 'user-select.html',
})
export class UserSelectPage {

  userList: any = [];
  queryText: string;
  showCancelButton: boolean=true;
  cancelButtonText: string="搜索";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public manageService: ManageService,) {
  }

  ionViewDidLoad() {
    this.loadUserList();
    console.log('ionViewDidLoad UserSelect');
  }

  loadUserList() {
    this.manageService.getUserList({})
      .then(ret => {
        this.userList = ret;
      });
  }

  itemSelected(item) {
    this.viewCtrl.dismiss(item);
  }

  cancelModal() {
    this.viewCtrl.dismiss();
  }

  doQuery(){

    if(!this.queryText){
      this.queryText = null;
    }
    let text = this.queryText;
    let me = this;
    setTimeout(function () {
      me.queryText = text;
    }, 100);

    let data: Object = {
      phoneNum: text
    };
    this.manageService.getUserList(data)
      .then(ret => {
        this.userList = ret;
      });
  }

}
