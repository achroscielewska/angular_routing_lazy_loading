import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSharedAngularMaterial } from './modules/shared/angular-material.imports';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedAngularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
