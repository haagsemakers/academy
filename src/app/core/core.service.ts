import { Injectable } from '@angular/core';;
import { BrowserModule, Title }  from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { Http, Response } from '@angular/http';

import { env } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoreService {

  constructor(
    private router:Router,
    private title:Title,
    // private http:Http
  ) {}

  // checkBackendStatus():Observable<any> {
  //   return this.http
  //     .get(env.apiRoot);
  // }

  // Set the page title
  setTitle(title:String) {
    this.title.setTitle(title + ' - Haagse Makers Academy');
  }

  // Add a bodyclass to <body>
  addBodyClass(c:String) {
    document.getElementsByTagName('body')[0].classList.add(String(c));
  }

  // Remove a bodyclass to <body>
  removeBodyClass(c:string) {
    document.getElementsByTagName('body')[0].classList.remove(c);
  }

}
