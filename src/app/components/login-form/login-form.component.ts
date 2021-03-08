// Imports modules.
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

// Imports helpers.
import { WriteErrorsForm } from "src/app/helpers/WriteErrorsForm";

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.inputs = document.querySelectorAll("input");
    this.writeError.validate(this.inputs);
  }

  submit(): void {
    const { email, password } = this.register.value;
    
    this.authService.login(email, password).subscribe(
      this.successRequest,
      error => this.failureRequest(error.error)
    );
  }

  private successRequest(data: any): void {
    console.log("Data: ", data);
  }

  private failureRequest(error: any): void {
    this.inputs.forEach(input => {
      this.writeError.writeError(input, error.message);
    });
  }
}
