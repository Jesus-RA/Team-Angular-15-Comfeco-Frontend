import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:"login", component: SignInPage },
  { path:"terminos-y-condiciones", component: TermsAndConditionsComponent },
  { path:"politica-de-privacidad-y-proteccion-de-datos", component: PrivacyPolicyComponent },
  { path:"**", pathMatch:"full", redirectTo:"home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
