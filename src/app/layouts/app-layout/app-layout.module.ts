// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import routing.
import { AppRoutingModule } from "./routing/app-routing.module";

// Import layout.
import { AppLayoutComponent } from "./component/app-layout.component";

// Imports pages.
import { AppPageComponent } from "src/app/pages/app-page/app-page.component";
import { WorkshopsPageComponent } from 'src/app/pages/workshops-page/workshops-page.component';
import { ComunitiesPageComponent } from 'src/app/pages/comunities-page/comunities-page.component';
import { CreatorsContentPageComponent } from 'src/app/pages/creators-content-page/creators-content-page.component';

// Imports shared
import { GlobalSharedModule } from "src/app/shared/global-shared.module";
import { AppSharedModule } from "src/app/shared/app-shared.module";

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppPageComponent,
    WorkshopsPageComponent,
    ComunitiesPageComponent,
    CreatorsContentPageComponent
  ],
  imports: [
    CommonModule,

    // Routes.
    AppRoutingModule,

    // Shared
    AppSharedModule,
    GlobalSharedModule
  ]
})
export class AppLayoutModule {}
