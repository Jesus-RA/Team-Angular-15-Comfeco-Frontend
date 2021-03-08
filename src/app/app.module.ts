// Imports modules.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

// Imports routes.
import { AppRoutingModule } from './routes/app-routing.module';

// Imports main component.
import { AppComponent } from './bootstrap/app.component';

// Imports layouts.
import { DefaultLayoutModule } from './layouts/default-layout/default-layout.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';

// Imports services.
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,

    // Routings
    AppRoutingModule,
    
    // Layouts.
    DefaultLayoutModule,
    AuthLayoutModule,

    // Http
    HttpClientModule,

    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
