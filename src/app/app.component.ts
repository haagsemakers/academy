import { Component } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';

import { CoreService } from './core/core.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loading:boolean=true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loading=false;
    this.router.events.subscribe((event:NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        window.scroll(0, 0);
      }
    });
  }
  ngOnDestroy() {}

}
