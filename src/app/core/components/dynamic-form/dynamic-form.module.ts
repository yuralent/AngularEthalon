import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form.component';
import {InitVarModule} from '../../../directives/init-var/init-var.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InitVarModule,
  ],
  exports: [DynamicFormComponent],
  declarations: [DynamicFormComponent]
})
export class DynamicFormModule {
}
