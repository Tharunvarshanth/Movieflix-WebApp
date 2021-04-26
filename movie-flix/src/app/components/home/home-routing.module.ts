import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {HomeMovieDetailComponent} from './home-movie-detail/home-movie-detail.component';
import {BuyMovieComponent} from './buy-movie/buy-movie.component';





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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
