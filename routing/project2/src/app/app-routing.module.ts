import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProductComponent } from './core/product/product.component';
import { ServiceComponent } from './core/service/service.component';
import { SigninComponent } from './core/signin/signin.component';

const routes: Routes = [
  {
    path:'',redirectTo: '/app/home', pathMatch:'full'
  },
  {
    path:'app',component:NavbarComponent,children:[
      {path:'home',component: HomeComponent},
      {path:'about',component: AboutComponent},
      {path:'contact',component:ContactComponent},
      {path:'service',component:ServiceComponent},
      {path:'product',component:ProductComponent},
      {path:'signin',component:SigninComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
