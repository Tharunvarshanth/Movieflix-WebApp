import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import { HomeMovieDetailComponent } from './home-movie-detail/home-movie-detail.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MaterialModule} from '../../material/material.module';
import { BuyMovieComponent } from './buy-movie/buy-movie.component';
import {NgxPayPalModule} from 'ngx-paypal';
import {TmdbComponent} from './tmdb/tmdb.component';
import {NgbDatepickerModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {TmdbViewInfoComponent} from './tmdb-view-info/tmdb-view-info.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeMovieDetailComponent,
    BuyMovieComponent,
    TmdbViewInfoComponent,
    TmdbComponent
  ],
  imports: [
    IvyCarouselModule,
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
    NgxPayPalModule,
    NgbDatepickerModule,
    NgbRatingModule,
  ],


})
export class HomeModule { }
