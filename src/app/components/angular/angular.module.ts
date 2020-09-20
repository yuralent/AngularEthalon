import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularComponent} from './angular.component';
import {AngularRoutingModule} from './angular-routing.module';
import {GoogleMapsModule} from '@angular/google-maps';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormCaseComponent} from './dynamic-form/dynamic-form-case.component';
import {MapCaseComponent} from './map/map-case.component';
import {AnimationsCaseComponent} from './animations/animations-case.component';
import {DynamicFormModule} from '../../core/components/dynamic-form/dynamic-form.module';

const childs = [
  AnimationsCaseComponent,
  DynamicFormCaseComponent,
  MapCaseComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AngularRoutingModule,
    DynamicFormModule,
  ],
  declarations: [
    AngularComponent,
    ...childs
  ],
})
export class AngularModule {
}
