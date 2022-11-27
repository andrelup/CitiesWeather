import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL = 'https://api.openweathermap.org/data/2.5/weather';
  private APPID = '5b4a5fb7fff1a8f5a3c0cd68dc4e9a5b';
  private units = 'metric';

  constructor(private http: HttpClient) { }

  getCityWeatherById(id: number) {
    return this.http.get(this.URL + '?id=' + id + '&units=' + this.units + '&appid=' + this.APPID)
  }

}
