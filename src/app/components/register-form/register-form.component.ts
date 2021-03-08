// Imports modules.
import { Component, OnInit } from '@angular/core';

// Imports helpers.
import { WriteErrorsForm } from "src/app/helpers/WriteErrorsForm";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    const writeError = new WriteErrorsForm;
    writeError.validate(inputs);
  }
}
