import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockModule } from './block/block.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
// import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlockModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
