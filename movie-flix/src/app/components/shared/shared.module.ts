import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component' ;
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [CommonModule, FormsModule],
  declarations: [FooterComponent, NavComponent ],
  exports:      [ NavComponent, FooterComponent,
    CommonModule, ReactiveFormsModule, HttpClientModule ]
})
export class SharedModule { }
