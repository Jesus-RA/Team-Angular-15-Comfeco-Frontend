// Imports modules.
import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

// Imports services.
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

// Imports components.
import { NotificationComponent } from "src/app/components/notification/notification.component";
import { LocalStorage } from 'src/app/helpers/LocalStorage';

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.css']
})
export class UserPresentationComponent {
  user: any = {};
  socialMedia: any[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private storage: LocalStorage<any>,
    private snackbar: MatSnackBar
  ) {
    this.watchStateUser();
  }

  private watchStateUser(): void {
    this.authService.currentUser.subscribe(user => {
      this.user = user;
      this.user.avatar = this.user.avatar ? this.user.avatar : `https://ui-avatars.com/api/?name=${ this.user.nickname }&size=150&rounded=true&background=random`;
      this.setSocialMedia(user);
    });
  }

  private setSocialMedia(user: any) {
    this.socialMedia = [
      {
        img: "/assets/icons/github.svg",
        link: user.githubLink
      },
      {
        img: "/assets/icons/twitter.svg",
        link: user.twitterLink
      },
      {
        img: "/assets/icons/facebook.svg",
        link: user.facebookLink
      },
      {
        img: "/assets/icons/linkedin.svg",
        link: user.linkedinLink
      }
    ];
  }

  changeAvatar(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file: File = input.files.item(0);
    
    const formdata: FormData = new FormData();
    formdata.set("avatar", file);
    
    this.userService.changeAvatar(this.user._id, formdata).subscribe(
      res => this.successReqChangeAvatar(res),
      err => this.failureReChangeAvatar()
    );
  }

  private successReqChangeAvatar(data: any): void {
    // Update local storage.
    this.user.avatar = data.avatar.url;
    this.storage.insert(this.storage.TEAMANGULAR15_USER, this.user);

    // Show notification.
    this.showMessage("edit", data.message, "warning");
  }

  private failureReChangeAvatar(): void {
    this.showMessage("error", "Sucedio un error durante la operacion", "danger");
  }

  private showMessage(icon: string, message: string, status: string): void {
    this.snackbar.openFromComponent(NotificationComponent, {
      duration: 3000,
      panelClass: [`bg-${ status }`],
      data: { icon, message }
    });
  }
}
