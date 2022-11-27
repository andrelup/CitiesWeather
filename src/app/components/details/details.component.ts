import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { City } from 'src/app/model/city';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input()
  get city(): City { return this.city };
  set city(city: City) {
    this._city = city || undefined;
    this.getDetails(city);
  }
  _city: City | undefined;

  details: any
  detailsForm: FormGroup;
  iconUrl: string = 'http://openweathermap.org/img/wn/';
  loadingDetails: boolean = false;
  errorDetails: boolean = false;

  lat?: number;
  lon?: number;
  constructor(private weatherService: WeatherService, private fb: FormBuilder) {
    this.detailsForm = this.fb.group({
      temp: [{ value: '' }],
      temp_max: [{ value: '' }],
      temp_min: [{ value: '' }]
    })
  }

  getDetails(city: City) {
    this.loadingDetails = true;
    this.iconUrl = 'http://openweathermap.org/img/wn/';
    this.weatherService.getCityWeatherById(city.id).subscribe({
      next: details => {
        console.log('[getDetails] details: ', details);
        this.details = details;
        this.iconUrl += this.details.weather[0].icon + '.png'
        const { temp, temp_min, temp_max } = this.details.main;

        this.detailsForm.patchValue({
          temp,
          temp_max,
          temp_min
        });
        this.lat = this.details.coord.lat
        this.lon = this.details.coord.lon
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
