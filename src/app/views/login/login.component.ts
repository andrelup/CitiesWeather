import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading: boolean = false;
  loginForm: FormGroup;
  errorLogin: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private storageService: StorageService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const username = this.loginForm.value.username
    const password = this.loginForm.value.password;

    if (username === 'admin' && password === 'admin') {
      this.storageService.setItem('username', username)
      this.fakeLoading();
    } else {
      this.setErrorLoading()
    }
  }
  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['weather'])
    }, 1500)
  }
  setErrorLoading() {
    this.errorLogin = true;
    setTimeout(() => this.errorLogin = false, 5000);
  }

}
