import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setItem(key: string, item: any) {
    let itemStringfy = JSON.stringify(item);
    localStorage.setItem(key, itemStringfy);
  }
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
  removeItem(key: string) {
    localStorage.removeItem(key)
  }
}
