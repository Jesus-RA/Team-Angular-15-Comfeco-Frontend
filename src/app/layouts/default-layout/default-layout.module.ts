// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports routing.
import { DefaultRoutingModule } from "./rounting/default-routing.module";

// Imports layouts.
import { DefaultLayoutComponent } from './component/default-layout.component';

// Imports pages.
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ]
})
export class DefaultLayoutModule {}
