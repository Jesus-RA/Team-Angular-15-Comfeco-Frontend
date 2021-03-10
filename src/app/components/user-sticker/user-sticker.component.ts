// Imports modules.
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// Imports services.
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: 'app-user-sticker',
  templateUrl: './user-sticker.component.html',
  styleUrls: ['./user-sticker.component.css']
})
export class UserStickerComponent {
  public user: any = {};

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe(user => {
      this.user = user
    });
  }

  signOut(): void {
    this.authService.signOut();
  }
}
