import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @Output()
  citySelectedEvent: EventEmitter<City> = new EventEmitter<City>();
  selectedCity?: number;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }
  cityChanged(selectedCities: string[]) {
    console.log('City id: ', selectedCities);


  }

}
