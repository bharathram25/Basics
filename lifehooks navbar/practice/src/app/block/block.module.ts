import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { FourComponent } from './four/four.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    FirstComponent,
    FourComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FirstComponent,
    FourComponent,
    NavbarComponent
  ]
})
export class BlockModule {}
