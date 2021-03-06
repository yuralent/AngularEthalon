import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApiInterceptor} from './interceptors/api.interceptor';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {AngularModule} from './components/angular/angular.module';
import {PipesModule} from './pipes/pipes.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule,
    AngularModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
