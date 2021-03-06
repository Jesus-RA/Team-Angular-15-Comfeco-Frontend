import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  { path:"login", component: LoginComponent },
  { path:"**", pathMatch:"full", redirectTo:"home" },
  { path: "forgot-password", loadChildren: () => import("../pages/forgot-password/forgot-password.module").then(m => m.ForgotPasswordModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
