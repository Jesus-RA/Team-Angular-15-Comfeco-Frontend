import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: "terminos-y-condiciones", component: TermsAndConditionsComponent },
  { path: "politica-de-privacidad-y-proteccion-de-datos", component: PrivacyPolicyComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule) },
  { path: 'perfil', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path:"**", pathMatch:"full", redirectTo:"inicio" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
