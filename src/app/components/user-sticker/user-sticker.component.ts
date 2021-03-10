// Imports modules.
import { Component } from '@angular/core';

// Imports services.
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: 'app-user-sticker',
  templateUrl: './user-sticker.component.html',
  styleUrls: ['./user-sticker.component.css']
})
export class UserStickerComponent {
  constructor(private authService: AuthService) {}

  signOut(): void {
    this.authService.signOut();
  }
}
