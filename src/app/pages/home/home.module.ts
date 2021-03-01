import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/modules/shared/shared.module';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContentCreatorCardComponent } from 'src/app/components/content-creator-card/content-creator-card.component';
import { CountdownComponent } from 'src/app/components/countdown/countdown.component';

import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    HomeComponent,
    ContentCreatorCardComponent,
    CountdownComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    IvyCarouselModule,
    LayoutModule,
  ]
})
export class HomeModule { }
