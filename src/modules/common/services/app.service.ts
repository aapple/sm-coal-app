import { Injectable } from '@angular/core';
import { Platform, Events } from 'ionic-angular';

import { Helper } from './helper.service';
import { AuthService } from './auth.service';
import { MenuService } from './menu.service';
import { FileUploadService } from './fileUpload.service';
import { UtilityComponent } from '../pages/utilityComponent';

import moment from 'moment';
import 'moment/src/locale/zh-cn';
import 'moment/src/locale/en-gb';

@Injectable()
export class AppService {
  //
  APP_LANGUAGE: string = 'AppLanguage';


  //
  // constructor
  constructor(
    public events: Events,
    public platform: Platform,
    public helper: Helper,
    public authService: AuthService,
    public menuService: MenuService,
    public fileUploadService: FileUploadService,
    public utilityComp: UtilityComponent
  ) {

    moment.locale("zh-cn");
  }

}
