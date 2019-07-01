import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home/home.component';
import { AppSharedAngularMaterial } from 'src/app/shared/angular-material.imports';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppSharedAngularMaterial
  ]
})
export class HomeModule { }
