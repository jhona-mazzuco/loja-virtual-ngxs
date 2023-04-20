import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { OverlayModule } from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarComponent,
    OverlayModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
