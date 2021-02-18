import { Component, OnInit } from '@angular/core';
import { ILoginRequest } from 'src/app/interfaces/login.interface';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss']
})
export class SignInPage implements OnInit {

  constructor(
    private loginService: LoginService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }

  login(formData: ILoginRequest): void {
    this.loginService.login(formData).subscribe(response => {
      if (response) {
        this.storageService.setToken(response.tokens);
        this.storageService.setUser(response.user);
      } else {
        this.storageService.setToken(null);
        this.storageService.setUser(null);
      }
    }, error => {
      console.log(error);
    });
  }

}
