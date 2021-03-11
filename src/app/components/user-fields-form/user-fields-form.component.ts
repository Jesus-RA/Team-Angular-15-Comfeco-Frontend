// Imports modules.
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// Imports helpers.
import { LocalStorage } from 'src/app/helpers/LocalStorage';

// Imports services.
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

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
    twitterLink: new FormControl(""),
    facebookLink: new FormControl(""),
    linkedinLink: new FormControl("")
  });

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private storage: LocalStorage<any>
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
  }
}
