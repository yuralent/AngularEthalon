import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './map/map.component';
import {AngularComponent} from './angular.component';
import {AnimationsComponent} from './animations/animations.component';

const routes: Routes = [
  {
    path: 'angular', component: AngularComponent, children: [
      {path: 'animations', component: AnimationsComponent},
      {path: 'map', component: MapComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {
}
