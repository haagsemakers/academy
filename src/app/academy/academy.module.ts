import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseItemComponent } from './course/course-item.component';
import { AcademyService } from './academy.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CourseItemComponent
  ],
  providers: [
    AcademyService
  ],
  exports: [

  ]
})
export class AcademyModule { }
