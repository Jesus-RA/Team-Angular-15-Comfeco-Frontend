// Imports modules.
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Imports guards.
import { AuthGuard } from 'src/app/guards/auth.guard';

// Import Layout
import { AppLayoutComponent } from "../component/app-layout.component";

// Imports pages.
import { AppPageComponent } from "src/app/pages/app-page/app-page.component";
import { WorkshopsPageComponent } from 'src/app/pages/workshops-page/workshops-page.component';
import { ComunitiesPageComponent } from 'src/app/pages/comunities-page/comunities-page.component';
import { CreatorsContentPageComponent } from 'src/app/pages/creators-content-page/creators-content-page.component';
import { ProfilePageComponent } from 'src/app/pages/profile-page/profile-page.component';
import { UserSettingsPageComponent } from 'src/app/pages/user-settings-page/user-settings-page.component';

const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "",
        canActivate: [AuthGuard],
        component: AppPageComponent
      },
      {
        path: "profile",
        canActivate: [AuthGuard],
        component: ProfilePageComponent
      },
      {
        path: "settings",
        canActivate: [AuthGuard],
        component: UserSettingsPageComponent
      },
      {
        path: "workshops",
        canActivate: [AuthGuard],
        component: WorkshopsPageComponent
      },
      {
        path: "communities",
        canActivate: [AuthGuard],
        component: ComunitiesPageComponent
      },
      {
        path: "creatorsContent",
        canActivate: [AuthGuard],
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
