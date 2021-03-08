// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

// Imports components.
import { RegisterFormComponent } from '../components/register-form/register-form.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { HeaderFormComponent } from '../components/header-form/header-form.component';
import { ModalConfirmEmailComponent } from '../components/modal-confirm-email/modal-confirm-email.component';
import { ModalMessageComponent } from '../components/modal-message/modal-message.component';

// Imports material.
import { AngularMaterial } from "../material/material";

@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginFormComponent,
    HeaderFormComponent,
    ModalConfirmEmailComponent,
    ModalMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularMaterial
  ],
  exports: [
    AngularMaterial,
    ReactiveFormsModule,

    // Components
    RegisterFormComponent,
    LoginFormComponent,
    HeaderFormComponent,
    ModalConfirmEmailComponent,
    ModalMessageComponent
  ]
})
export class AuthSharedModule {}
