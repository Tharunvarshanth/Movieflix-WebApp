import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../service/auth.service';
import {LogInByToken, TokenBasedLogInSuccess} from '../store/actions/auth.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.states';
import {SharingService} from '../service/sharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private shareservice: SharingService, private route: Router, private store: Store<AppState>) {
  }

  canActivate(): boolean{
         console.log('moviepage refresh atuh guard');
         if (this.shareservice.isLoggedIn()){
           // this.store.dispatch(LogInByToken());
            return true;
         }else{
           console.log('j');
           this.route.navigate(['movieflix/auth']);
           return false;
         }
         return true;
  }

}
