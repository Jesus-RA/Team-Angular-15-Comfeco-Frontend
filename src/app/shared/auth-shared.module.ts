// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

// Imports components.
import { RegisterFormComponent } from '../components/register-form/register-form.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { HeaderFormComponent } from '../components/header-form/header-form.component';

// Imports material.
import { AngularMaterial } from "../material/material";

@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginFormComponent,
    HeaderFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularMaterial
  ],
  exports: [
    AngularMaterial,

    // Components
    RegisterFormComponent,
    LoginFormComponent,
    HeaderFormComponent
  ]
})
export class AuthSharedModule {}
