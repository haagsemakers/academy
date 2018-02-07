// https://github.com/cornflourblue/angular2-alert-notifications

import { Component, OnInit } from '@angular/core';

import { Alert, AlertType } from './alert.models';
import { AlertService } from './alert.service';

@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.scss']
})

export class AlertComponent {
  alerts: any[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert:Alert) => {
      if (!alert) {
        // clear alerts when an empty alert is received
        this.alerts = [];
        return;
      }

      // add alert to array
      this.alerts.push(alert);

      // remove alert after 5 seconds
      setTimeout(() => this.removeAlert(alert), 5000);

    });
  }

  removeAlert(alert:any) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert:any) {
    if (!alert) {
      return;
    }

    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return 'is-success';
      case AlertType.Error:
        return 'is-danger';
      case AlertType.Info:
        return 'is-info';
      case AlertType.Warning:
        return 'is-warning';
    }
  }
}
