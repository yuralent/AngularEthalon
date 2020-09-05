import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {Error404Component} from './components/error404/error404.component';
import {AngularAnimationsComponent} from './components/angular-animations/angular-animations.component';
import {MapComponent} from './components/map/map.component';

const routes: Routes = [
 /* { path: 'profile', loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule) },*/
  { path: 'profile', component: ProfileComponent },
  { path: 'animations', component: AngularAnimationsComponent },
  { path: 'map', component: MapComponent },
  { path: '', redirectTo: 'animations', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
