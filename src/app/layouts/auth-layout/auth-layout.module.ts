// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports routing.
import { AuthRoutingModule } from "./routing/auth-routing.module";

// Import layout.
import { AuthLayoutComponent } from "./component/auth-layout.component";

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthLayoutModule {}
