import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AppRoutingModule), provideAnimationsAsync(), provideHttpClient()]
})
  .catch((err) => console.error(err));
