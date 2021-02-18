import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginRequest } from 'src/app/interfaces/login.interface';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() signIn: EventEmitter<ILoginRequest> = new EventEmitter<ILoginRequest>();
  show: boolean;
  group: FormGroup;

  get emailField(): FormControl {
    return this.group.get('email') as FormControl;
  }
  get passwordField(): FormControl {
    return this.group.get('password') as FormControl;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.group = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/),
        ],
      ],
      password: ['', [Validators.required, Validators.pattern(/[a-z0-9]{6}$/)]],
    });
  }

  visibility(): void {
    this.show = !this.show;
  }

  send(): void {
    this.signIn.emit(this.emailField.value)
  }

}
