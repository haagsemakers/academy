import { Component } from '@angular/core';
import { CoreService } from './core/core.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loading:boolean=true;

  constructor() {}

  ngOnInit() {
    this.loading=false;
  }
  ngOnDestroy() {}

}
