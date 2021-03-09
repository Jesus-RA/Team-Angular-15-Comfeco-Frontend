// Imports modules.
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Import Layout
import { AppLayoutComponent } from "../component/app-layout.component";

// Imports pages.
import { AppPageComponent } from "src/app/pages/app-page/app-page.component";
import { WorkshopsPageComponent } from 'src/app/pages/workshops-page/workshops-page.component';
import { ComunitiesPageComponent } from 'src/app/pages/comunities-page/comunities-page.component';
import { CreatorsContentPageComponent } from 'src/app/pages/creators-content-page/creators-content-page.component';

const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "",
        component: AppPageComponent
      },
      {
        path: "workshops",
        component: WorkshopsPageComponent
      },
      {
        path: "comunities",
        component: ComunitiesPageComponent
      },
      {
        path: "creatorsContent",
        component: CreatorsContentPageComponent
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
