import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path:"login", component: LoginComponent },
  { path:"politica-de-privacidad-y-proteccion-de-datos", component: PrivacyPolicyComponent },
  { path:"**", pathMatch:"full", redirectTo:"home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
