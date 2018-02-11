import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ui/home/home.component';
import { CourseItemComponent } from './academy/course/course-item.component';

const routes:Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '', component: HomeComponent,
    data: {
      title: 'Home',
      bodyClass: 'home'
    }
  },
  { path: 'course/:id', component: CourseItemComponent,
    data: {
      title: 'Cursus',
      bodyClass: 'course'
    }
  },

  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }
