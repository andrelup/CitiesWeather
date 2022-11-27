import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  @Input()
  favouritesCities: City[] = [];
  @Output()
  favouritesCitiesChange = new EventEmitter<City[]>();
  @Output()
  favouriteRemoved = new EventEmitter<City>();
  @Output()
  citySelectedEvent: EventEmitter<City> = new EventEmitter<City>();
  selectedCity?: number;


  constructor() { }


  cityChanged(selectedCities: number[]) {
    console.log('City id: ', selectedCities);
    let city = this.favouritesCities.filter(item => item.id === selectedCities[0])
    console.log('City: ', city);
    this.citySelectedEvent.emit(city[0]);
  }
  deleteFavourite(city: City) {
    for (let i = 0; i < this.favouritesCities.length; i++) {
      if (this.favouritesCities[i].id === city.id) {
        this.favouritesCities.splice(i, 1);
        break;
      }
    }
    this.favouriteRemoved.emit(city);
    this.favouritesCitiesChange.emit(this.favouritesCities);
  }
}
