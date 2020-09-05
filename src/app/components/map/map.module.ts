import {NgModule} from '@angular/core';
import {GoogleMapsModule} from '@angular/google-maps';
import {MapComponent} from './map.component';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    GoogleMapsModule
  ],
  providers: [],
})
export class MapModule {
}
