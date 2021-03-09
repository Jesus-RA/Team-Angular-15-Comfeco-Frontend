// Imports modules.
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";

// Imports helpers.
import { WriteErrorsForm } from "src/app/helpers/WriteErrorsForm";

// Imports rules.
import { FormsValidators } from "src/app/rules/FormsValidators";

// Imports services.
import { AuthService } from "src/app/services/auth/auth.service";

// Imports components.
import { ModalMessageComponent } from '../modal-message/modal-message.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  register: FormGroup = new FormGroup({
    nickname: new FormControl("", [FormsValidators.nickname()]),
    email: new FormControl("", [FormsValidators.email()]),
    password: new FormControl("", [FormsValidators.password()]),
    confirmPassword: new FormControl("", [FormsValidators.password()])
  });
  private writeError: WriteErrorsForm = new WriteErrorsForm;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    const writeError = new WriteErrorsForm;
    writeError.validate(Array.from(inputs));
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
    this.dialog.open(ModalMessageComponent, {
      disableClose: true,
      width: "400px",
      data: {
        text: data.message,
        image: "/assets/icons/accountCreatedSuccess.svg"
      }
    });
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
