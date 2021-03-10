// Imports modules.
import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

// Imports services.
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.css']
})
export class UserSettingsPageComponent {
  user: FormGroup = new FormGroup({
    nickname: new FormControl(""),
    country: new FormControl(""),
    gender: new FormControl(""),
    githubLink: new FormControl(""),
    twitterLink: new FormControl(""),
    facebookLink: new FormControl(""),
    linkedinLink: new FormControl("")
  });

  constructor(private authService: AuthService) {
    this.setUser();
  }

  private setUser(): void {
    this.authService.currentUser.subscribe((user: any) => {
      this.user.setValue({
        nickname: user.nickname,
        country: user.country || "",
        gender: user.gender || "",
        githubLink: user.githubLink || "",
        twitterLink: user.twitterLink || "",
        facebookLink: user.facebookLink || "",
        linkedinLink: user.linkedinLink || ""
      });
    });
  }
}
