// Imports modules.
import { Component, Input } from '@angular/core';

// Imports services.
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent {
  @Input() header: { title: string; subtitle: string };

  constructor(private authService: AuthService) {}

  async google(): Promise<void> {
    const res = await this.authService.signInGoogle();

    res.subscribe(
      data => console.log(data),
      err => console.error(err)
    );
  }
}
