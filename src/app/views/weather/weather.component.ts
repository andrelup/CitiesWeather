import { Component, OnInit } from '@angular/core';
import { cities } from 'src/assets/data/cities';
import { City } from '../../model/city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  cities: City[] = cities;
  favouritesCities: City[] = [];
  cityShowed?: City;
  constructor() { }

  citySelected(city: City) {
    this.cityShowed = city;
  }
  favouriteRemoved(city: City) {
    this.cities.push(city);
  }
  favouriteAdd(city: City) {
    this.favouritesCities.push(city);
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].id === city.id) {
        this.cities.splice(i, 1);
        break;
      }
    }
  }
}
