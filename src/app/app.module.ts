// Imports modules.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import {
  SocialAuthServiceConfig,
  SocialLoginModule,
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angularx-social-login";

// Imports environnemts.
import { environment } from "src/environments/environment";

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

    // Social login
    SocialLoginModule,

    // Http
    HttpClientModule,

    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.GOOGLE_CLIENT_ID)
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.FACEBOOK_CLIENT_ID)
          }
        ]
      } as SocialAuthServiceConfig,
    },
    AuthService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
