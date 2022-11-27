import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { City } from 'src/app/model/city';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges {

  @Input()
  get city(): City { return this.city };
  set city(city: City) {
    this._city = city || undefined;
    this.getDetails(city);
  }
  _city: City | undefined;

  details: any
  loadingDetails: boolean = false;
  errorDetails: boolean = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console
  }
  getDetails(city: City) {
    this.loadingDetails = true;
    this.weatherService.getCityWeatherById(city.id).subscribe({
      next: details => {
        console.log('[getDetails] details: ', details);
        this.details = details;
        this.loadingDetails = false;
      },
      error: error => {
        console.log('[getDetails] error: ', error);
        this.loadingDetails = false;
        this.errorDetails = true;
      }
    });
  }
}
