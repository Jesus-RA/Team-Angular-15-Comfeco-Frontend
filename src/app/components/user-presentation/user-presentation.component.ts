// Imports modules.
import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

// Imports services.
import { AuthService } from 'src/app/services/auth/auth.service';

// Imports components.
import { ModalFileUploadComponent } from "src/app/components/modal-file-upload/modal-file-upload.component";

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
    private modal: MatDialog
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

  changeAvatar(): void {
    this.modal.open(ModalFileUploadComponent, {
      width: "500px"
    });
  }
}
