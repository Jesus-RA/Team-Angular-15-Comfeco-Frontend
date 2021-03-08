// Imports modules.
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

// Imports helpers.
import { WriteErrorsForm } from "src/app/helpers/WriteErrorsForm";

// Imports rules.
import { FormsValidators } from 'src/app/rules/FormsValidators';

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

  constructor() {}

  ngOnInit(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    const writeError = new WriteErrorsForm;
    writeError.validate(inputs);
  }

  submit(): void {
    console.log(this.register.value);
  }
}
