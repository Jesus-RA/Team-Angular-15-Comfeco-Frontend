// Imports modules.
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";

// Imports rules
import { FormsValidators } from "src/app/rules/FormsValidators";

// Imports helpers.
import { WriteErrorsForm } from "src/app/helpers/WriteErrorsForm";

// Imports services.
import { AuthService } from "src/app/services/auth/auth.service";

// Imports components.
import { ModalMessageComponent } from "src/app/components/modal-message/modal-message.component";

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {
  forgotPassword: FormGroup = new FormGroup({
    email: new FormControl("", [FormsValidators.email()])
  });
  private writeError: WriteErrorsForm = new WriteErrorsForm;
  private input: HTMLInputElement;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.input = document.getElementById("email") as HTMLInputElement;
    this.writeError.validate([this.input]);
  }

  submit(): void {
    const { email } = this.forgotPassword.value;
    this.authService.forgotPassword(email).subscribe(
      res => this.successRequest(res),
      err => this.setError(err.error)
    );
  }

  private successRequest(data: any): void {
    this.dialog.open(ModalMessageComponent, {
      width: "500px",
      disableClose: true,
      data: {
        text: data.message,
        image: "/assets/icons/reset-password.svg"
      }
    });

    this.forgotPassword.reset();
  }

  private setError(error: any ): void {
    const { name, message } = error;

    if ( name === "NonExistentEmail" ) {
      this.writeError.writeError(this.input, message);
    }
  }
}
