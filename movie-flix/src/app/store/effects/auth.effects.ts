import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import {catchError, concatMap, exhaustMap, map, tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';

import { AuthService } from '../../service/auth.service';
import {AuthActionTypes, LogIn, LogInSuccess, LogInFailure, TokenBasedLogInSuccess, SignUpFailure} from '../actions/auth.actions';
import {SharingService} from '../../service/sharing.service';


@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private shareserive: SharingService,
    private router: Router,
  ) {
  }

  // effects go here

  login = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActionTypes.LOGIN),
      concatMap(value =>
        this.authService.loginUser(value).pipe(
          map(user => LogInSuccess({token: user.token, username: user.username, name: user.name, role: user.role})),
          catchError(error => of(LogInFailure({error})))
        )
      )
    );
  }
  );

  signup = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActionTypes.SIGNUP),
      concatMap(value =>
        this.authService.registerUser(value).pipe(
          map(user => LogInSuccess({token: user.token, username: user.username, name: user.name, role: user.role})),
          catchError(error => of(SignUpFailure({error})))
        )
      )
    );
  }
  );

  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  );

  @Effect({dispatch: false})
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((parse: any) => {
      console.log('LogInSucces', JSON.stringify(parse));
      this.shareserive.setSettings(parse);
      this.router.navigate(['movieflix/home' ] );
    })
  );


  @Effect({dispatch: false})
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE),
    tap((parse: any) => {
      console.log('LogInFailure', parse);
    })
  );

  @Effect({ dispatch: false })
  LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
      this.shareserive.clearUserSettings();
      this.router.navigateByUrl('movieflix/auth');
    })
  );



  @Effect()
  loginbytoken: Observable<any> =   this.actions.pipe(
    ofType(AuthActionTypes.LOGINBYTOKEN),
  concatMap(() =>
  this.authService.loadbyusername(localStorage.getItem('movieflix-token') || '{}').pipe(
    map(user => TokenBasedLogInSuccess({token: user.token, username: user.username, name: user.name, role: user.role})),
    catchError(async (error) => console.log(error))
   )
  )
 );


  @Effect({dispatch: false})
  TokenBasedLogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGINBYTOKEN_SUCCESS),
    tap((parse: any) => {
      console.log('LOGINBYTOKEN_SUCCESS', parse.token);
      this.router.navigateByUrl('movieflix/home');
    })
  );



}
