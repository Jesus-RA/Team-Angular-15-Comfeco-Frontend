// Imports modules.
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// Imports helpers.
import { LocalStorage } from "src/app/helpers/LocalStorage";

// Imports services.
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent {
  @Input() header: { title: string; subtitle: string };

  constructor(
    private localStorage: LocalStorage<{}>,
    private authService: AuthService,
    private router: Router
  ) {}

  async google(): Promise<void> {
    const res = await this.authService.signInGoogle();
    res.subscribe(
      data => this.successLogin(data),
      err => console.error(err)
    );
  }

  async facebook(): Promise<void> {
    const res = await this.authService.signInFacebook();
    res.subscribe(
      data => this.successLogin(data),
      err => console.error(err)
    );
  }

  private successLogin(data: any): void {
    this.localStorage.insert(this.localStorage.TEAMANGULAR15_ACCESS_TOKEN, data.tokens);
    this.localStorage.insert(this.localStorage.TEAMANGULAR15_USER, data.user);
    this.router.navigate(["/app"]);
  }
}
