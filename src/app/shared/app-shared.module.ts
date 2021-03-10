// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

// Imports components.
import { NavbarAppComponent } from "../components/navbar-app/navbar-app.component";
import { UserPresentationComponent } from '../components/user-presentation/user-presentation.component';

// Imports material
import { AngularMaterial } from "../material/material";

@NgModule({
  declarations: [
    NavbarAppComponent,
    UserPresentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterial,
    ReactiveFormsModule
  ],
  exports: [
    AngularMaterial,
    ReactiveFormsModule,

    // Compoennts
    NavbarAppComponent,
    UserPresentationComponent
  ]
})
export class AppSharedModule {}
