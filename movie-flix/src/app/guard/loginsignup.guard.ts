import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SharingService} from '../service/sharing.service';

@Injectable({
  providedIn: 'root'
})
export class LoginsignupGuard implements CanActivate {

  constructor(private router: Router, private shareserivce: SharingService) {}


  canActivate(): boolean {
    if (this.shareserivce.isLoggedIn()) {
      this.router.navigate(['movieflix/home']);
      return false;
    }
    return true;
  }



}

