import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';



@NgModule({
  declarations: [
    NavbarComponent,
    Slide1Component,
    Slide2Component
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    Slide1Component,
    Slide2Component
  ]
})
export class CoreModule {}
