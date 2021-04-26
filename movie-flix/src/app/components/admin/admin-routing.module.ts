import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {AddmovieComponent} from './add-movie/addmovie.component';
import {ManageMoviesComponent} from './manage-movies/manage-movies.component';
import {MoviedetailComponent} from './moviedetail/moviedetail.component';
import {UsersmanageComponent} from './usersmanage/usersmanage.component';


const routes: Routes = [
  { path: '', component: AdminHomeComponent },
  { path: 'add-movie', component: AddmovieComponent },
  { path: 'manage-movie', component: ManageMoviesComponent },
  { path: 'manage-movie/:movieName', component: MoviedetailComponent},
  { path: 'manage-users', component: UsersmanageComponent}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
