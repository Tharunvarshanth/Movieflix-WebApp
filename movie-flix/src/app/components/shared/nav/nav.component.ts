import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, selectAuthState} from '../../../store/app.states';
import {Observable} from 'rxjs';
import {LogOut} from '../../../store/actions/auth.actions';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
import {SharingService} from '../../../service/sharing.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isAuthenticated: boolean | undefined;

  currentusername: string |undefined;
  thisurl: string | undefined;
  isloginpage: boolean;
  isAdmin: boolean | undefined;

  isHomePage = false;
  searchWord: string;


  constructor( private router: Router, private shareSerive: SharingService, private store: Store<AppState> ) {

      this.isloginpage = false;
      this.isAdmin = false;
      this.searchWord = '';
  }

  ngOnInit(): void {
       console.log('navcomponent');
       this.thisurl = this.router.url;
       if (this.thisurl.endsWith('login')) {
          this.isloginpage = true;
       }
       this.isAuthenticated = this.shareSerive.isLoggedIn();

       if (this.isAuthenticated){
           this.currentusername = this.shareSerive.getUserSettings().name;
           this.isAdmin = (this.shareSerive.getUserSettings().role === 'editor');
       }

       let removedlink = this.thisurl;
       removedlink = this.thisurl.replace('/movieflix', '');
       console.log(removedlink);
       if (removedlink.startsWith('/home')){
          this.isHomePage = true;
       }
  }

  logout(): void{
    this.store.dispatch(LogOut());

  }

  searchbyMoviesName(): void{
    console.log(this.searchWord);
  }

}
