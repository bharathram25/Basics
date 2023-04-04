import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { Slide2Component } from './core/slide2/slide2.component';

const routes: Routes = [

  {path:"",redirectTo:"/app",pathMatch:"full"},
  {path:"app",component:Slide2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
