import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AcademyService } from './academy.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [

  ],
  providers: [
    AcademyService
  ],
  exports: [

  ]
})
export class AcademyModule { }
