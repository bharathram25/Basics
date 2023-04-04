import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  b1:any;
  b2:any;
  b3:any;

  button1(){
    this.b1=!this.b1;
    this.b2=false;
    this.b3=false
  }
  button2(){
    this.b2=!this.b2;
    this.b1=false;
    this.b3=false
  }
  button3(){
    this.b3=!this.b3;
    this.b2=false;
    this.b1=false
  }

  }




