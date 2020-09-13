import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {InitVarDirective} from './init-var/init-var.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    InitVarDirective,
  ],
  declarations: [
    InitVarDirective,
  ],
})
export class DirectivesModule {
}
