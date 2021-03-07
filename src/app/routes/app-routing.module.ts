// Imports modules.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("src/app/layouts/default-layout/default-layout.module").then(module => module.DefaultLayoutModule)
  },
  {
    path: "auth",
    loadChildren: () => import("src/app/layouts/auth-layout/auth-layout.module").then(module => module.AuthLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
