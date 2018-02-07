import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ui/home/home.component';


const routes:Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent,
    data: {
      title: 'Home',
      bodyClass: 'home'
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
