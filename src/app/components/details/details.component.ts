import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  city?: City;
  constructor() { }

  ngOnInit(): void {
  }

}
