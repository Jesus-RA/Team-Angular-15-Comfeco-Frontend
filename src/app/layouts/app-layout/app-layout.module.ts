// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import routing.
import { AppRoutingModule } from "./routing/app-routing.module";

// Import layout.
import { AppLayoutComponent } from "./component/app-layout.component";

// Imports pages.
import { AppPageComponent } from "src/app/pages/app-page/app-page.component";

// Imports shared
import { GlobalSharedModule } from "src/app/shared/global-shared.module";
import { AppSharedModule } from "src/app/shared/app-shared.module";

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppPageComponent
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
