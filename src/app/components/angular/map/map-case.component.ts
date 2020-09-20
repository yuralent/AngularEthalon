import {Component, OnInit, ViewChild} from '@angular/core'
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps'

@Component({
  selector: 'map-case',
  templateUrl: './map-case.component.html'
})
export class MapCaseComponent implements OnInit {
  @ViewChild(GoogleMap, {static: false}) map: GoogleMap;
  @ViewChild(MapInfoWindow, {static: false}) info: MapInfoWindow;

  lat = 40.73061;
  lng = -73.935242;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };
  markers = [];
  infoContent = '';

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: this.lat,
        lng: this.lng,
      };
    });
  }

  zoomIn(): void {
    if (this.zoom < this.options.maxZoom) {
      this.zoom++;
    }
  }

  zoomOut(): void {
    if (this.zoom > this.options.minZoom) {
      this.zoom--;
    }
  }

  click(event: google.maps.MouseEvent): void {
    console.log(event);
  }

  logCenter(): void {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker(): void {
    this.markers.push({
      position: {
        lat: this.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    });
  }

  openInfo(marker: MapMarker, content): void {
    this.infoContent = content;
    this.info.open(marker);
  }
}
