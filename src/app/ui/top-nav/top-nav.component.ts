import { Component } from '@angular/core';
// import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  menuActive:Boolean = false;

  constructor(
    // public auth:AuthService
  ) { }

  toggleCollapse() {
    this.menuActive = !this.menuActive
  }

  // public logout() {
  //   this.auth.logout();
  // }
}
