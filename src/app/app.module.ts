import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { OverlayModule } from "@angular/cdk/overlay";
import { NgxsModule } from "@ngxs/store";
import { ShoppingCartState } from "./shared/states/shopping-cart.state";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarComponent,
    OverlayModule,
    NgxsModule.forRoot([ShoppingCartState])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
