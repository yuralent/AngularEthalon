import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularComponent} from './angular.component';
import {DynamicFormCaseComponent} from './dynamic-form/dynamic-form-case.component';
import {AnimationsCaseComponent} from './animations/animations-case.component';
import {MapCaseComponent} from './map/map-case.component';

const routes: Routes = [
  {
    path: 'angular', component: AngularComponent, children: [
      {path: 'animations', component: AnimationsCaseComponent},
      {path: 'dynamic-form', component: DynamicFormCaseComponent},
      {path: 'map', component: MapCaseComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {
}
