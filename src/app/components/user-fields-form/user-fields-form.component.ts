// Imports modules.
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";

// Imports helpers.
import { LocalStorage } from 'src/app/helpers/LocalStorage';

// Imports services.
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

// Imports component.
import { NotificationComponent } from "src/app/components/notification/notification.component";

@Component({
  selector: 'app-user-fields-form',
  templateUrl: './user-fields-form.component.html',
  styleUrls: ['./user-fields-form.component.css']
})
export class UserFieldsFormComponent {
  private user: any = {};
  form: FormGroup = new FormGroup({
    nickname: new FormControl(""),
    country: new FormControl(""),
    gender: new FormControl(""),
    githubLink: new FormControl(""),
    biography: new FormControl(""),
    knowledgeAreas: new FormControl(""),
    twitterLink: new FormControl(""),
    facebookLink: new FormControl(""),
    linkedinLink: new FormControl("")
  });

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private storage: LocalStorage<any>,
    private snackbar: MatSnackBar
  ) {
    this.setUser();
  }

  private setUser(): void {
    this.authService.currentUser.subscribe((user: any) => {
      this.user = user;
      this.form.setValue({
        nickname: user.nickname,
        country: user.country || "",
        gender: user.gender || "",
        biography: user.biography || "",
        knowledgeAreas: user.knowledgeAreas || "",
        githubLink: user.githubLink || "",
        twitterLink: user.twitterLink || "",
        facebookLink: user.facebookLink || "",
        linkedinLink: user.linkedinLink || ""
      });
    });
  }

  updateUser(): void {
    this.userService.update(this.user._id, this.form.value).subscribe(
      res => this.successRequest(res),
      err => console.log(err)
    );
  }

  private successRequest(res: any): void {
    const { user } = res;
    this.storage.insert(this.storage.TEAMANGULAR15_USER, user);
    this.showNotification();
  }

  private showNotification(): void {
    this.snackbar.openFromComponent(NotificationComponent, {
      duration: 3000,
      panelClass: ["bg-warning"],
      horizontalPosition: "center",
      data: {
        icon: "edit",
        message: "Su perfil ha sido modificado con exito."
      }
    });
  }
}
