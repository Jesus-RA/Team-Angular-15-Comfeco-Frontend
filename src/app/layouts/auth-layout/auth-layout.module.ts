// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports routing.
import { AuthRoutingModule } from "./routing/auth-routing.module";

// Import layout.
import { AuthLayoutComponent } from "./component/auth-layout.component";

// Imports pages.
import { RegisterPageComponent } from 'src/app/pages/register-page/register-page.component';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { ForgotPasswordPageComponent } from 'src/app/pages/forgot-password-page/forgot-password-page.component';

// Imports shared
import { GlobalSharedModule } from "src/app/shared/global-shared.module";
import { AuthSharedModule } from "../../shared/auth-shared.module";

@NgModule({
  declarations: [
    // Layout
    AuthLayoutComponent,

    // Pages
    RegisterPageComponent,
    LoginPageComponent,
    ForgotPasswordPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    GlobalSharedModule,
    AuthSharedModule
  ]
})
export class AuthLayoutModule {}
