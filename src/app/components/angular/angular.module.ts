import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularComponent} from './angular.component';
import {AngularRoutingModule} from './angular-routing.module';
import {AnimationsComponent} from './animations/animations.component';
import {MapComponent} from './map/map.component';
import {GoogleMapsModule} from '@angular/google-maps';

const childs = [
  AnimationsComponent,
  MapComponent,
];

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    AngularRoutingModule,
  ],
  declarations: [
    AngularComponent,
    ...childs
  ],
})
export class AngularModule {
}
