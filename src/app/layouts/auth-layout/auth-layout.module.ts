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

// Imports shared
import { AuthSharedModule } from "../../shared/auth-shared.module";

@NgModule({
  declarations: [
    // Layout
    AuthLayoutComponent,

    // Pages
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthSharedModule
  ]
})
export class AuthLayoutModule {}
