import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { MarketShareState } from './core/states/market-share.state';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { ApplyDiscountPipe } from './shared/pipes/apply-discount.pipe';
import { CalculateTotalPipe } from './shared/pipes/calculate-total.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([MarketShareState]),
    NgxsStoragePluginModule.forRoot({
      key: [MarketShareState],
      storage: StorageOption.LocalStorage
    }),
    BrowserAnimationsModule,
    NavbarComponent,
    ApplyDiscountPipe,
    CalculateTotalPipe
  ],
  providers: [
    ApplyDiscountPipe,
    CalculateTotalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
