// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

// Imports components.
import { ModalMessageComponent } from "src/app/components/modal-message/modal-message.component";

// Imports material.
import { AngularMaterial } from "../material/material";

@NgModule({
  declarations: [
    ModalMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterial,
    ReactiveFormsModule
  ],
  exports: [
    // Material
    AngularMaterial,

    // Forms
    ReactiveFormsModule,

    // components
    ModalMessageComponent
  ]
})
export class GlobalSharedModule {}
