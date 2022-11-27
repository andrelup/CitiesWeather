import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { City } from 'src/app/model/city';
import { cities } from 'src/assets/data/cities';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input()
  cities: City[] = cities;
  filteredOptions?: Observable<City[]>;
  @Output()
  citySelectedEvent: EventEmitter<City> = new EventEmitter<City>();

  myControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): City[] {
    if (value && typeof (value) === 'string') {

      const filterValue = value.toLowerCase();

      return this.cities.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    return cities;
  }
  getOptionText(option: any) {
    return option.name;
  }
  citySelected(optionSelected: MatAutocompleteSelectedEvent) {
    let city = optionSelected.option.value;
    this.citySelectedEvent.emit(city);
  }

}
