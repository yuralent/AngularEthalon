import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {Error404Component} from './components/error404/error404.component';
import {AngularAnimationsComponent} from './components/angular-animations/angular-animations.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'animations', component: AngularAnimationsComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
