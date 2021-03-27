import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {AppState, selectAuthState} from '../store/app.states';
import {Store} from '@ngrx/store';
import {SharingService} from '../service/sharing.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate{


 currentuserrole: string | undefined;

  constructor(private authservice: AuthService, private shareService: SharingService, private route: Router) {}





  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    if ( this.shareService.isLoggedIn()){
            this.currentuserrole = this.shareService.getUserSettings().role;
            if (this.currentuserrole === expectedRole) {
         return true;
      }
      else{
           this.route.navigate(['movieflix/movies']);
           return false;
      }
            return true;
    }
    else {
      this.route.navigate(['']);
      return false;
    }


  }

}
