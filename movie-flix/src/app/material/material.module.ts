
import {IvyCarouselModule} from 'angular-responsive-carousel';


import {NgModule} from '@angular/core';
const MaterialComponents = [

  IvyCarouselModule
];

@NgModule({
  exports: [MaterialComponents],
  imports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
