import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GulpLessComponent} from "./gulp-less.component";

const routes: Routes = [
  {path: '', component: GulpLessComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GulpLessRoutingModule {
}
