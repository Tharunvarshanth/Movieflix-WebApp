import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
import {Store} from '@ngrx/store';
import {AppState, selectAuthState} from '../../../store/app.states';
import {LogIn} from '../../../store/actions/auth.actions';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  getState: Observable<any>  ;
  errorMessage: string | null | undefined;
  isloadingbutton: boolean | null ;

  constructor(private fb: FormBuilder, private authservice: AuthService , private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
    this.isloadingbutton = false ;
  }

  loginForm =  this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required]]
  });




  ngOnInit(): void {

    console.log('ngonint');
    this.getState.subscribe((state: { errorMessage: string | null; isloading: boolean|null }) => {
      this.isloadingbutton = state.isloading;
      this.errorMessage = state.errorMessage;
    });
   // console.log(this.errorMessage);
  }


   onloginSubmit(): void{
    this.isloadingbutton = true;
    const payload = {
       username: this.loginForm.value.username,
       password: this.loginForm.value.password
     };
    this.store.dispatch(LogIn(payload));

  }

}
