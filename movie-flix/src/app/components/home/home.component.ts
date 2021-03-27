import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {SharingService} from '../../service/sharing.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.states';
import {LogOut} from '../../store/actions/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
