import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminModule} from './components/admin/admin.module';
import {AuthGuard} from './guard/auth.guard';
import {RoleGuard} from './guard/role.guard';
import {LoginsignupGuard} from './guard/loginsignup.guard';
import {ErrorComponent} from './components/error/error.component';

const routes: Routes = [

  {
    path: 'movieflix/home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  { path: 'movieflix/admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule),
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'editor'
    }
  },
  {
    path: 'movieflix/auth',
    loadChildren: () => import ('./components/auth/auth.module').then(m => m.AuthModule),
    canActivate: [LoginsignupGuard],
  },
  {
    path: 'movieflix',
    redirectTo: 'movieflix/home',
    pathMatch: 'full'
  },
  {
    path : '**',
    component : ErrorComponent,
    data: {
      error: 404
    }
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
