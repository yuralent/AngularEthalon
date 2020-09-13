import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScreenResolutionService} from './screen-resolution/screen-resolution.service';

@NgModule({
  imports: [
    CommonModule,
  ],
 providers: [
   ScreenResolutionService,
 ]
})
export class ServicesModule {
}
