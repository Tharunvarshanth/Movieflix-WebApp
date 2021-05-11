import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {HomeMovieDetailComponent} from './home-movie-detail/home-movie-detail.component';
import {BuyMovieComponent} from './buy-movie/buy-movie.component';
import {TmdbComponent} from './tmdb/tmdb.component';
import {TmdbViewInfoComponent} from './tmdb-view-info/tmdb-view-info.component';





const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':movieName',
    component: HomeMovieDetailComponent
  },
  {
    path: ':movieName/buy',
    component: BuyMovieComponent
  },
  {
    path: 'tmdb/home',
    component: TmdbComponent
  },
  {
    path: 'tmdb/home/:tmdbId',
    component: TmdbViewInfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
