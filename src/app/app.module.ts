import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

// App modules
import { AlertComponent } from './core/alert/alert.component';
import { AlertService } from './core/alert/alert.service';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui.module';
import { AcademyModule } from './academy/academy.module';

import { env } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    CoreModule,
    UiModule,
    AcademyModule
  ],
  providers: [
    AlertService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: env.recaptchaKey } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
