import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private storageService: StorageService, private router: Router) { }

  logout() {
    this.storageService.removeItem('username')
    this.router.navigate(['/home']);
  }

}
