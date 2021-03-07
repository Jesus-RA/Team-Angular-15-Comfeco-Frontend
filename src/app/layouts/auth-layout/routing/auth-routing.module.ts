// Imports modules.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// Imports layouts.
import { AuthLayoutComponent } from "../component/auth-layout.component";

// Imports pages.
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from 'src/app/pages/forgot-password-page/forgot-password-page.component';

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginPageComponent
      },
      {
        path: "register",
        component: RegisterPageComponent
      },
      {
        path: "forgotPassword",
        component: ForgotPasswordPageComponent
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
export class AuthRoutingModule {}
