// Imports modules.
import { FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// Imports helpers.
import { WriteErrorsForm } from "src/app/helpers/WriteErrorsForm";
import { LocalStorage } from "src/app/helpers/LocalStorage";

// Imports rules.
import { FormsValidators } from 'src/app/rules/FormsValidators';

// Imports services.
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  register: FormGroup = new FormGroup({
    email: new FormControl("", [FormsValidators.email()]),
    password: new FormControl("", [FormsValidators.password()])
  });
  private writeError: WriteErrorsForm = new WriteErrorsForm;
  private inputs: NodeListOf<HTMLInputElement>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorage: LocalStorage<{}>
  ) {}

  ngOnInit(): void {
    this.inputs = document.querySelectorAll("input");
    this.writeError.validate(Array.from(this.inputs));
  }

  submit(): void {
    const { email, password } = this.register.value;
    
    this.authService.login(email, password).subscribe(
      res => this.successRequest(res),
      err => this.failureRequest(err.error)
    );
  }

  private successRequest(data: any): void {
    this.localStorage.insert(this.localStorage.TEAMANGULAR15_ACCESS_TOKEN, data.tokens);
    this.localStorage.insert(this.localStorage.TEAMANGULAR15_USER, data.user);
    this.router.navigate(["/app"]);
  }

  private failureRequest(error: any): void {
    const { name, message } = error;

    if (name === "UnverifiedEmail") {
      const input = document.getElementById("email") as HTMLInputElement;
      this.writeError.writeError(input, message);
      return;
    }

    if (name === "CredentialsIncorrect") {
      this.inputs.forEach(input => {
        this.writeError.writeError(input, message);
      });
    }
  }
}
