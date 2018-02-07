import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { env } from './../../environments/environment';

import { courses } from './api';

@Injectable()
export class AcademyService {

  constructor() {}

  // Get a list of courses
  public index(options:Object):any {
    console.log('fetching courses');
    return courses;
  }

}
