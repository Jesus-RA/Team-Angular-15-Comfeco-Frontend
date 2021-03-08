// Imports modules.
import { Component, OnInit } from '@angular/core';

// Imports helpers.
import { WriteErrorsForm } from "src/app/helpers/WriteErrorsForm";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    const writeError = new WriteErrorsForm;
    writeError.validate(inputs);
  }
}
