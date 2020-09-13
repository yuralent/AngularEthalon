import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GulpComponent} from './gulp.component';


const routes: Routes = [
  {
    path: '', component: GulpComponent, children: [
      {
        path: '',
        loadChildren: () => import(`./gulp-less/gulp-less.module`).then(m => m.GulpLessModule)
      },
      {
        path: 'less',
        loadChildren: () => import(`./gulp-less/gulp-less.module`).then(m => m.GulpLessModule)
      },
      {
        path: 'svgstore',
        loadChildren: () => import(`./gulp-svg-store/gulp-svg-store.module`).then(m => m.GulpSvgStoreModule)
      },
      {
        path: '**',
        loadChildren: () => import(`./gulp-svg-store/gulp-svg-store.module`).then(m => m.GulpSvgStoreModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GulpRoutingModule {
}
