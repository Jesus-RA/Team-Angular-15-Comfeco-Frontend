// Imports modules.
import { Component } from '@angular/core';

// Imports helpers.
import { LocalStorage } from "src/app/helpers/LocalStorage";

// Imports services.
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.css']
})
export class UserPresentationComponent {
  user: any = {};

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe(user => {
      this.user = user;
      this.user.avatar = this.user.avatar ? this.user.avatar : `https://ui-avatars.com/api/?name=${ this.user.nickname }&size=150&rounded=true&background=random`;
    });
  }
}
