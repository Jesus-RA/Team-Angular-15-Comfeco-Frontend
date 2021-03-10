// Imports modules.
import { Component } from '@angular/core';

// Imports helpers.
import { LocalStorage } from "src/app/helpers/LocalStorage";

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.css']
})
export class UserPresentationComponent {
  user: any = {};

  constructor(
    private storage: LocalStorage<{}>
  ) {
    this.setUser();
  }

  private setUser(): void {
    this.user = this.storage.get(this.storage.TEAMANGULAR15_USER);
    this.user.avatar = this.user.avatar ? this.user.avatar : `https://ui-avatars.com/api/?name=${ this.user.nickname }&size=150&rounded=true&background=random`;
  }
}
