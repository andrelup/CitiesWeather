import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @Input()
  favouritesCities: City[] = [];

  @Output()
  citySelectedEvent: EventEmitter<City> = new EventEmitter<City>();
  selectedCity?: number;


  constructor() { }

  ngOnInit(): void {
  }
  cityChanged(selectedCities: number[]) {
    console.log('City id: ', selectedCities);
    let city = this.favouritesCities.filter(item => item.id === selectedCities[0])
    console.log('City: ', city);
    this.citySelectedEvent.emit(city[0]);
  }
}
