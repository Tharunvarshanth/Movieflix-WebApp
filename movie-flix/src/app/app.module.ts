import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeModule} from './components/home/home.module';
import {AdminModule} from './components/admin/admin.module';
import {AuthModule} from './components/auth/auth.module';

import {AuthService} from './service/auth.service';
import {AuthGuard} from './guard/auth.guard';
import {RoleGuard} from './guard/role.guard';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {AuthEffects} from './store/effects/auth.effects';

import { counterReducer } from '../app/store/reducers/counter.reducer';
import {reducers} from './store/app.states';
import {SharingService} from './service/sharing.service';
import { ErrorComponent } from './components/error/error.component';
import {SharedModule} from './components/shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from './service/token-interceptor.service';
import {AdminutilsService} from './service/adminutils.service';
import {FormCollectionService} from './service/form-collection.service';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    AuthModule,
    HomeModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    SharedModule
  ],
  providers: [AuthService, AuthGuard, RoleGuard, SharingService,
    AdminutilsService, FormCollectionService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
