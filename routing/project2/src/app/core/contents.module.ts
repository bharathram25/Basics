import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    ProductComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    ProductComponent,
    SigninComponent
  ]
})
export class ContentsModule { }
