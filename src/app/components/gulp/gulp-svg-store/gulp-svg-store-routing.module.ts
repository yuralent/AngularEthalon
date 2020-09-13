import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GulpSvgStoreComponent} from './gulp-svg-store.component';

const routes: Routes = [
  {path: '', component: GulpSvgStoreComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GulpSvgStoreRoutingModule {
}
