import { Component } from '@angular/core';
import { Events, ModalController, Loading, LoadingController, AlertController, ToastController, ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'utility-component',
  templateUrl: 'utilityComponent.html'
})
export class UtilityComponent {
  //
  loading: Loading;


  //
  // constructor
  constructor(
    public events: Events,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController
  ) {
  }


  //
  // register events
  registerEvents() {
    this.events.subscribe('appComp:presentLoading', () => {
      this.presentLoading();
    });

    console.log('has register for some utility component events');
  }


  //
  // present loading
  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: '请等待 ...',
      duration: 5000,
    });

    return this.loading.present();
  }


  //
  // dismiss loading
  dismissLoading() {
    return this.loading.dismiss();
  }


  //
  // present alter
  presentAlter(params?) {
    if (!params) {
      params = {
        title: '温馨提示',
        subTitle: '',
      }
    }

    let alert = this.alertCtrl.create({
      title: params.title,
      subTitle: params.subTitle,
      buttons: ['OK']
    });
    return alert.present();
  }


  //
  // present confirm
  presentConfirm(params?) {
    if (!params) {
      params = {
        title: '询问',
        message: '',
      }
    }

    let confirm = this.alertCtrl.create({
      title: params.title,
      message: params.message,
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确认',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    return confirm.present();
  }


  //
  // present toast
  presentToast(message: string, duration: number = 3000, position: string = 'middle') {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      cssClass: 'hc-toast',
      position: position,
    });
    toast.present();
  }


  //
  // present action sheet
  presentActionSheet(title = '操作', btns: Object[] = []) {
    let actionSheet = this.actionSheetCtrl.create({
      title: title,
      buttons: btns,
    });
    actionSheet.present();
  }


  //
  // present modal
  presentModal(page, params: Object = {}, callback?) {
    let modal = this.modalCtrl.create(page, params);

    callback && modal.onDidDismiss(callback);

    modal.present();
  }


}
