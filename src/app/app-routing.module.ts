import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInPage } from './pages/sign-in/sign-in.page';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:"login", component: SignInPage },
  { path:"politica-de-privacidad-y-proteccion-de-datos", component: PrivacyPolicyComponent },
  { path:"**", pathMatch:"full", redirectTo:"home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
