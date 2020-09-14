import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularComponent} from './components/angular/angular.component';

const routes: Routes = [
  {
    path: 'angular',
    component: AngularComponent
  },
  {
    path: 'gulp',
    loadChildren: () => import('./components/gulp/gulp.module').then(m => m.GulpModule)
  },
  {
    path: '',
    redirectTo: 'angular',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
