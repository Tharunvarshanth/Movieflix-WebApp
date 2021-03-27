import { createAction, props} from '@ngrx/store';
import {User} from '../../models/user';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGINBYTOKEN = '[Auth] LoginByToken',
  LOGINBYTOKEN_SUCCESS =  '[Auth] LoginByToken Success',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT = '[Auth] Logout',
  SIGNUP = '[Auth] SignUp',
  SIGNUP_FAILURE = '[Auth] SignUP Failure'
}

export const LogIn = createAction(
  // action's type
  AuthActionTypes.LOGIN,
  // optional payload
  props<{username: string, password: string}>(),
);

export const TokenBasedLogInSuccess = createAction(
  AuthActionTypes.LOGINBYTOKEN_SUCCESS,
  props<{token: string, username: string, name: string, role: string}>(),
);

export const LogInSuccess = createAction(
    AuthActionTypes.LOGIN_SUCCESS,
    props<{token: string, username: string, name: string, role: string}>(),
);
export const LogInFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{error: string}>(),
);

export const LogInByToken = createAction(
   AuthActionTypes.LOGINBYTOKEN

);

export const LogOut = createAction(
  AuthActionTypes.LOGOUT
);


export const SignUp = createAction(
  AuthActionTypes.SIGNUP,
  props<{username: string, password: string, name: string, country: string, phonenumber: string}>()
);
export const SignUpFailure = createAction(
  AuthActionTypes.SIGNUP_FAILURE,
  props<{error: string}>(),
);

