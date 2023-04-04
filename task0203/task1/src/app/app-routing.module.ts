import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProductComponent } from './core/product/product.component';
import { ServiceComponent } from './core/service/service.component';

const routes: Routes = [

  {path: '',redirectTo:'/app/home',pathMatch:'full'},
  {
    path:'app', component: NavbarComponent,children:[
      {path: 'home',component:HomeComponent},
      {path: 'about',component:AboutComponent},
      {path: 'service',component:ServiceComponent},
      {path: 'product',component:ProductComponent},
      {path: 'contact',component:ContactComponent},
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
