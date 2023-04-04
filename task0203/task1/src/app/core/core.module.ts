import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProductComponent,
    ContactComponent
  ]
})
export class CoreModule { }
