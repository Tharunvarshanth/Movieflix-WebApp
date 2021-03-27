import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private storageName = 'movieflix-token';
  helper = new JwtHelperService();
  constructor() { }

  setSettings(data: any): void {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  isLoggedIn(): boolean{
    if (!!localStorage.getItem('movieflix-token')) {
      let token: any = localStorage.getItem('movieflix-token') || '{}';
      token = JSON.parse(token);

      if ( !this.helper.isTokenExpired(token.token)){
        return true;
      }
    }
    return false;
  }

  getUserSettings(): any{
    const data: any = localStorage.getItem(this.storageName);
    return JSON.parse(data);
  }
  getuserToken(): any{
    const data: any = localStorage.getItem(this.storageName);
    const d = (JSON.parse(data));
    return (d.token);
  }

  clearUserSettings(): void {
    localStorage.removeItem(this.storageName);
  }

  cleanAll(): void {
    localStorage.clear();
  }
}
