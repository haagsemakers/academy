import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CoreService } from './../../core/core.service';
// import { AuthService } from './../../core/auth.service';
import { AcademyService } from './../../academy/academy.service';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {

  public courses:any[];

  constructor (
    // public auth:AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private coreService:CoreService,
    private academyService:AcademyService
  ) {}

  ngOnInit():void {
    this.coreService.setTitle(this.route.snapshot.data.title);
    this.coreService.addBodyClass(this.route.snapshot.data.bodyClass);
    this.courses = this.academyService.index({});
  }

  ngOnDestroy():void {
    this.coreService.removeBodyClass(this.route.snapshot.data.bodyClass);
  }
}
