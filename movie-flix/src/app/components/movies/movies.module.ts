import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {MoviesComponent} from './movies.component';
import {MoviesRoutingModule} from './movies-routing.module';





@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
  ]
})
export class MoviesModule { }
