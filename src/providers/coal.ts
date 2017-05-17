import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Coal provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Coal {

  data : any = null;
  constructor(public http: Http) {
    console.log('Hello Coal Provider');
  }

  loadTop() {
    return new Promise(resolve => {
      this.http.get("https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot")
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.data.children;
          resolve(this.data);
        });
    });
  }

}
