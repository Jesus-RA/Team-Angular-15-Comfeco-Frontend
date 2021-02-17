import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {

  constructor(private authService:SocialAuthService) { }

  googleLogin():Promise<SocialUser>{
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

  facebookLogin():Promise<SocialUser>{
    return this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }

  signOut():void{
    this.authService.signOut()
  }

}
