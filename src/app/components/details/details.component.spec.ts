import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { of } from 'rxjs';

import { WeatherService } from 'src/app/services/weather.service';
import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [AppModule],
      providers: [WeatherService]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    weatherService = fixture.debugElement.injector.get(WeatherService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getDetails() call a API REST', () => {
    let city = {
      "id": 2509304,
      "name": "Zufre",
      "state": "",
      "country": "ES",
      "coord": {
        "lon": -6.33333,
        "lat": 37.833328
      }
    };
    let cityDetail = { "coord": { "lon": -2.842, "lat": 37.5429 }, "weather": [{ "id": 804, "main": "Clouds", "description": "nubes", "icon": "04n" }], "base": "stations", "main": { "temp": 284.38, "feels_like": 282.5, "temp_min": 284.38, "temp_max": 287.07, "pressure": 951, "humidity": 36 }, "visibility": 10000, "wind": { "speed": 0.89, "deg": 170, "gust": 2.24 }, "clouds": { "all": 100 }, "dt": 1669579694, "sys": { "type": 2, "id": 2004386, "country": "ES", "sunrise": 1669532610, "sunset": 1669568086 }, "timezone": 3600, "id": 2509300, "name": "Zújar", "cod": 200 }
    let spyGetDetails = spyOn(weatherService, 'getCityWeatherById').and.returnValue(of(cityDetail));
    component.getDetails(city);
    expect(spyGetDetails).toHaveBeenCalled();
    // expect(favouritesCitiesChangeSpy).toHaveBeenCalled();
  })
});
