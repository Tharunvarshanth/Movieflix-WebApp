import { Action, createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from '../actions/counter.actions';

export const initialStatecount = 0;

const counterRed$ = createReducer(
  initialStatecount,
  on(increment, (state) => {
    console.log('state + 1');
    return state + 1; }
    ),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: number | undefined, action: Action): number {
  return counterRed$(state, action);
}
