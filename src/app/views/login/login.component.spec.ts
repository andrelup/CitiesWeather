import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [AppModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('return invalid form', () => {
    const user = component.loginForm.controls['username'];
    user.setValue('admin23');
    expect(component.loginForm.invalid).toBe(true);
  });

  it('return valid form', () => {
    let user = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password'];

    user.setValue('admin');
    password.setValue('admin');
    expect(component.loginForm.invalid).toBeFalse();
  });
  it('calling to fakeLoading()', () => {
    let spyFakeLoading = spyOn(component, 'fakeLoading').and.callFake(() => null);
    let user = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password'];

    user.setValue('admin');
    password.setValue('admin');
    component.login();
    expect(spyFakeLoading).toHaveBeenCalled();
  });
  it('calling to setErrorLoading()', () => {
    let spyFakeLoading = spyOn(component, 'setErrorLoading').and.callFake(() => null);
    let user = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password'];

    user.setValue('admin21312');
    password.setValue('admin');
    component.login();
    expect(spyFakeLoading).toHaveBeenCalled();
  });
  it('fakeLoading set true loading flag and navigate to weather view', fakeAsync(() => {
    component.fakeLoading();
    expect(component.loading).toBeTrue();
    tick(1500)
    expect(routerSpy.navigate).toHaveBeenCalledWith(['weather']);
  }));
  it('setErrorLoading set errorLogin true', () => {
    component.fakeLoading();
    expect(component.loading).toBeTrue();
  });
  it('setErrorLoading set errorLogin false after 5 seconds', fakeAsync(() => {
    component.setErrorLoading();
    tick(5000)
    expect(component.loading).toBeFalse();
  }));
});


