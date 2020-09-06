import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GulpSvgStoreComponent} from './gulp-svg-store/gulp-svg-store.component';
import {GulpLessComponent} from './gulp-less/gulp-less.component';
import {GulpComponent} from './gulp.component';


const routes: Routes = [
  {
    path: 'gulp', component: GulpComponent, children: [
      {path: 'svgstore', component: GulpSvgStoreComponent},
      {path: 'less', component: GulpLessComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GulpRoutingModule {
}
