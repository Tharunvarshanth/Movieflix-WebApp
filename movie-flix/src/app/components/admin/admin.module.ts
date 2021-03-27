import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {SharedModule} from '../shared/shared.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {AddmovieComponent} from './add-movie/addmovie.component';
import {SharingService} from '../../service/sharing.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from '../../service/token-interceptor.service';

import {FormsModule} from '@angular/forms';
import {AdminutilsService} from '../../service/adminutils.service';
import { ManageMoviesComponent } from './manage-movies/manage-movies.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

@NgModule({
  declarations: [AdminComponent, AdminHomeComponent, AddmovieComponent, ManageMoviesComponent, MoviedetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
  ],


})
export class AdminModule { }
