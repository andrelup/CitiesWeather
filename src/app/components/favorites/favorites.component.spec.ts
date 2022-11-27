import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      imports: [AppModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('cityChanged method call citySelectedEvent eventEmitter', () => {
    let eventEmitterSpy = spyOn(component.citySelectedEvent, 'emit');
    component.favouritesCities = [{
      "id": 2509300,
      "name": "Zújar",
      "state": "",
      "country": "ES",
      "coord": {
        "lon": -2.84197,
        "lat": 37.54285
      }
    },
    {
      "id": 2509302,
      "name": "Zuheros",
      "state": "",
      "country": "ES",
      "coord": {
        "lon": -4.31531,
        "lat": 37.54332
      }
    },
    {
      "id": 2509304,
      "name": "Zufre",
      "state": "",
      "country": "ES",
      "coord": {
        "lon": -6.33333,
        "lat": 37.833328
      }
    }];

    component.cityChanged([2509304]);
    expect(eventEmitterSpy).toHaveBeenCalled();
  })
  it('cityChanged method call citySelectedEvent eventEmitter', () => {
    let favouriteRemovedSpy = spyOn(component.favouriteRemoved, 'emit');
    let favouritesCitiesChangeSpy = spyOn(component.favouritesCitiesChange, 'emit');
    component.favouritesCities = [{
      "id": 2509300,
      "name": "Zújar",
      "state": "",
      "country": "ES",
      "coord": {
        "lon": -2.84197,
        "lat": 37.54285
      }
    },
    {
      "id": 2509302,
      "name": "Zuheros",
      "state": "",
      "country": "ES",
      "coord": {
        "lon": -4.31531,
        "lat": 37.54332
      }
    },
    {
      "id": 2509304,
      "name": "Zufre",
      "state": "",
      "country": "ES",
      "coord": {
        "lon": -6.33333,
        "lat": 37.833328
      }
    }];
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
    component.deleteFavourite(city);
    expect(favouriteRemovedSpy).toHaveBeenCalled();
    expect(favouritesCitiesChangeSpy).toHaveBeenCalled();
  })
});
