import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let storageService: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(AuthGuard);
    storageService = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('canActivate navigate to login', () => {
    let spyGetItem = spyOn(storageService, 'getItem').and.callFake(() => true);
    guard.canActivate();
    expect(spyGetItem).toHaveBeenCalled();
  });
  it('logout navigate to login', () => {
    let spyGetItem = spyOn(storageService, 'getItem').and.callFake(() => false);
    guard.canActivate();
    expect(spyGetItem).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['login']);
  });
});
