import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfileModule} from './components/profile/profile.module';
import {Error404Module} from './components/error404/error404.module';
import {AngularAnimationsModule} from './components/angular-animations/angular-animations.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiInterceptor} from './interceptors/api.interceptor';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {MapModule} from './components/map/map.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    Error404Module,
    AngularAnimationsModule,
    MapModule,
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
