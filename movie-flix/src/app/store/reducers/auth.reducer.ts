import { User } from '../../models/user';
import {LogInFailure, LogInSuccess, LogOut, SignUpFailure, TokenBasedLogInSuccess} from '../actions/auth.actions';
import {Action, createReducer, on} from '@ngrx/store';



export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  isloading: boolean;
  user: User|null ;
  errorMessage: string|null;
}
export const initialState: State = {
  isAuthenticated: false,
  isloading: false,
  user : null,
  errorMessage: null
};


const userRed$ = createReducer(
  initialState,
  on(LogInSuccess, (state, action) => {
     console.log('state + 1', action);
     return {
      ...state,
          isAuthenticated: true,
          isloading: false,
          user: {
          token: action.token,
            username: action.username,
            name: action.name,
            role: action.role
        },
        errorMessage: null
      };
  }),
  on(TokenBasedLogInSuccess, (state, action) => {
    console.log('TokenBasedLogInSuccess', action);
    return {
      ...state,
      isAuthenticated: true,
      isloading: false,
      user: {
        token: action.token,
        username: action.username,
        name: action.name,
        role: action.role
      },
      errorMessage: null
    };
  }),
  on(LogInFailure, (state, action) => {
    console.log('reducer, failure');
    return{
      ...state,
      isAuthenticated: false,
      isloading: false,
      errorMessage: 'Incorrect email and/or password.'
    };
  }),
  on(SignUpFailure, (state) => {
    console.log('reducer,signup failure');
    return{
      ...state,
      isAuthenticated: false,
      isloading: false,
      errorMessage : 'Email Already In use'
    };
  }),
  on(LogOut, ()  => initialState)



);

export function Reducer(state: State|undefined, action: Action): State {
  return userRed$(state, action);
}

