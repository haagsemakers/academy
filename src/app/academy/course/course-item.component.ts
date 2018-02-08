import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { CoreService } from './../../core/core.service';
// import { AuthService } from './../../core/auth.service';
import { AcademyService } from './../../academy/academy.service';

@Component({
  moduleId: module.id,
  templateUrl: 'course-item.component.html',
  styleUrls: ['course-item.component.scss']
})

export class CourseItemComponent implements OnInit, OnDestroy {

  public course:any;
  private sub: any;

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

    this.sub = this.route.params.subscribe(params => {
       this.course = this.academyService.getCourse({ slug: params['id']}); // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy():void {
    this.coreService.removeBodyClass(this.route.snapshot.data.bodyClass);
  }
}
