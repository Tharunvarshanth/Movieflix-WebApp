import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import { HomeMovieDetailComponent } from './home-movie-detail/home-movie-detail.component';
import {MdbCarouselModule, MdbModule} from 'mdb-angular-ui-kit';
import {MaterialModule} from '../../material/material.module';
import { BuyMovieComponent } from './buy-movie/buy-movie.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeMovieDetailComponent,
    BuyMovieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
  ],


})
export class HomeModule { }
