import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    NavbarComponent
  ]
})
export class BlockModule {}
