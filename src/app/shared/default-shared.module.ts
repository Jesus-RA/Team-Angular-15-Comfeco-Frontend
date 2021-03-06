// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports components.
import { NavbarComponent } from "../components/navbar/navbar.component";

// Imports material.
import { AngularMaterial } from "../material/material";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterial
  ],
  exports: [
    AngularMaterial,
    NavbarComponent
  ]
})
export class DefaultSharedModule {}
