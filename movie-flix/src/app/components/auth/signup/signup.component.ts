import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PasswordValidator} from '../../shared/password.validation';
import {AuthService} from '../../../service/auth.service';
import {Store} from '@ngrx/store';
import {AppState, selectAuthState} from '../../../store/app.states';
import {SignUp} from '../../../store/actions/auth.actions';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {

  getState: Observable<any>;
  errorMessage: string | null | undefined;
  isloadingbutton: boolean;

  constructor(private fb: FormBuilder, private authservice: AuthService , private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
    this.isloadingbutton = false;
  }

  registrationForm =  this.fb.group({
     username: ['', Validators.required],
     password: ['', [Validators.required, Validators.minLength(4)]],
     confirmpassword: ['', [Validators.required, Validators.minLength(4)]],
     name: ['d', Validators.required],
     country: ['', Validators.required],
     phonenumber: ['', Validators.required],
  }, {validators: PasswordValidator});



  ngOnInit(): void {
     this.getState.subscribe((state) => {
         this.errorMessage = state.errorMessage;
         this.isloadingbutton = state.isloading;
    });
  }


 onSubmit(): void{
    this.isloadingbutton = true;
    const payload =  {
       username: this.registrationForm.value.username,
       password: this.registrationForm.value.password,
       name    : this.registrationForm.value.name,
       country : this.registrationForm.value.country,
       phonenumber : this.registrationForm.value.phonenumber
    };

    this.store.dispatch(SignUp(payload));


  }

}
