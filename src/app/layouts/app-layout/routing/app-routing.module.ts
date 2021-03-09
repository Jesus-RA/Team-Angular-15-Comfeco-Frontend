// Imports modules.
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Import Layout
import { AppLayoutComponent } from "../component/app-layout.component";

// Imports pages.
import { AppPageComponent } from "src/app/pages/app-page/app-page.component";

const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "",
        component: AppPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
