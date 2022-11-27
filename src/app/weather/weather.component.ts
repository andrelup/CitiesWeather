import { Component, OnInit } from '@angular/core';
import { cities } from 'src/assets/data/cities';
import { City } from '../model/city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cities: City[] = cities;
  favouritesCities: City[] = [];
  cityShowed?: City;
  constructor() { }

  ngOnInit(): void {
    this.cityShowed = {
      "id": 2509300,
      "name": "Zújar",
      "state": "",
      "country": "ES",
      "coord": {
        "lon": -2.84197,
        "lat": 37.54285
      }
    };
  }
  citySelected(city: City) {
    console.log('City: ', city);
    this.cityShowed = city;
  }
  cityAdd(city: City) {
    this.favouritesCities.push(city);
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].id === city.id) {
        this.cities.splice(i, 1);
      }
    }
  }
}
