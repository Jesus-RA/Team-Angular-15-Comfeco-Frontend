import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/modules/shared/shared.module';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContentCreatorCardComponent } from 'src/app/components/content-creator-card/content-creator-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContentCreatorCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    IvyCarouselModule,
  ]
})
export class HomeModule { }
