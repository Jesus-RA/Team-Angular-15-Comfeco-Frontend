// Imports modules.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// Import layouts.
import { DefaultLayoutComponent } from '../component/default-layout.component';

// Imports pages.
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DefaultRoutingModule {}
