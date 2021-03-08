// Imports modules.
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

// Imports helpers.
import { WriteErrorsForm } from "src/app/helpers/WriteErrorsForm";

// Imports rules.
import { FormsValidators } from "src/app/rules/FormsValidators";

// Imports services.
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  register: FormGroup = new FormGroup({
    nickname: new FormControl("", [FormsValidators.nickname]),
    email: new FormControl("", [FormsValidators.email]),
    password: new FormControl("", [FormsValidators.password]),
    confirmPassword: new FormControl("", [FormsValidators.password])
  });
  private writeError: WriteErrorsForm = new WriteErrorsForm;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    const writeError = new WriteErrorsForm;
    writeError.validate(inputs);
  }

  submit(): void {
    const { nickname, email, password, confirmPassword } = this.register.value;
    
    if (password !== confirmPassword) {
      const inputs = document.querySelectorAll("input[data-type='password']") as NodeListOf<HTMLInputElement>;
        inputs.forEach(input => this.setError(input, "Las contraseñas no coinciden."));
      return;
    }

    this.authService.register({ nickname, email, password }).subscribe(
      res => this.successRequest(res),
      error => this.failureRequest(error.error)
    );
  }
  
  private successRequest(data: any): void {
    console.log("Data: ", data);
    this.register.reset();
  }

  private failureRequest(error: any): void {
    if (error.name === "EmailAlreadyExist") {
      const input = document.getElementById("email") as HTMLInputElement;
      this.setError(input, error.message);
    }
  }

  private setError(input: HTMLInputElement, message: string): void {
    this.writeError.writeError(input, message);
  }
}
