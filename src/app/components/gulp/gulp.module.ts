import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GulpComponent} from './gulp.component';
import {GulpRoutingModule} from './gulp-routing.module';


@NgModule({
  imports: [
    CommonModule,
    GulpRoutingModule,
  ],
  declarations: [
    GulpComponent
  ],
})
export class GulpModule {
}
