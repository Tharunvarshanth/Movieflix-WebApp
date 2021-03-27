import { Component, OnInit } from '@angular/core';
import {AppState, selectAuthState} from '../../store/app.states';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {LogOut} from '../../store/actions/auth.actions';
import {User} from '../../models/user';
import {decrement, increment, reset} from '../../store/actions/counter.actions';
import {SharingService} from '../../service/sharing.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  isAuthenticated: boolean | undefined;
  user: User = new User();
  errorMessage = null;

  constructor(private shareservice: SharingService, private store: Store<AppState>){

  }

  ngOnInit(): void {
      this.isAuthenticated = this.shareservice.isLoggedIn();
      this.user = this.shareservice.getUserSettings();
  }

  logOut(): void {
    this.store.dispatch(LogOut());
  }





}
