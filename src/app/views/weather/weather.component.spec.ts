import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let city = {
    "id": 2509300,
    "name": "Zújar",
    "state": "",
    "country": "ES",
    "coord": {
      "lon": -2.84197,
      "lat": 37.54285
    }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      imports: [AppModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('citySetected sets cityShowed variable', () => {
    expect(component.cityShowed).toBeFalsy();
    component.citySelected(city);
    expect(component.cityShowed).toBeTruthy();
  });
  it('add a city as favourite', () => {
    expect(component.favouritesCities.length).toBeFalsy();
    component.favouriteAdd(city);
    expect(component.favouritesCities).toBeTruthy();
    expect(component.favouritesCities.length).toBeGreaterThan(0);
  });
  it('Remove a favourite City', () => {
    component.favouriteAdd(city);
    let lengthCitiesBeforeRemove = component.cities.length;
    component.favouriteRemoved(city);
    let lengthCitiesAfterRemove = component.cities.length;
    expect(lengthCitiesAfterRemove).toBeGreaterThan(lengthCitiesBeforeRemove);
  });
});
