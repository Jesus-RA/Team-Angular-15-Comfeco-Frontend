import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  resetForm: FormGroup;
  message: string;
  success: boolean = false;
  error: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.resetForm = this.formBuilder.group({
      email: new FormControl("",
        Validators.compose([
          Validators.required
        ]))
    });
  }

  sendEmail(): void {
    this.error = false;
    this.success = false;
    this.userService.forgotPassword(this.resetForm.value).subscribe(
      (response: any) => {
        this.success = true;
        this.message = response.message;
      },
      (error: any) => {
        this.error = true;
        this.message = error.error.message;
      },
      () => this.resetForm.reset()
    )
  }

}
