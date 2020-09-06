import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GulpComponent} from './gulp.component';
import {GulpRoutingModule} from './gulp-routing.module';
import {GulpLessComponent} from './gulp-less/gulp-less.component';
import {GulpSvgStoreComponent} from './gulp-svg-store/gulp-svg-store.component';


@NgModule({
  declarations: [
    GulpComponent,
    GulpLessComponent,
    GulpSvgStoreComponent,
  ],
  imports: [
    CommonModule,
    GulpRoutingModule,
  ]
})
export class GulpModule {
}
