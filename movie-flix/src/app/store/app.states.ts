import * as auth from './reducers/auth.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {counterReducer} from './reducers/counter.reducer';


export interface AppState {
  authuser: auth.State;
  count: number ;

}
export const reducers: ActionReducerMap<AppState> = {
   authuser: auth.Reducer,
  count : counterReducer


};



export const selectFeatureCount = createFeatureSelector<AppState>('count');

export const selectAuthState = createFeatureSelector<AppState>('authuser');
