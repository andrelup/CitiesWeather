import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit {
  @ViewChild('map') mapElement: any;
  map?: google.maps.Map;
  @Input()
  latitude: number | undefined;
  @Input()
  longitude: number | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.latitude && this.longitude) {

      const mapProperties = {
        center: new google.maps.LatLng(this.latitude, this.longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    }
  }
}
