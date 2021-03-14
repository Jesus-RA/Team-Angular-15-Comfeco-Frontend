// Imports modules.
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormControl } from "@angular/forms";

// Imports services.
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-credentials-modal',
  templateUrl: './credentials-modal.component.html',
  styleUrls: ['./credentials-modal.component.css']
})
export class CredentialsModalComponent implements OnInit {
  credentials: FormGroup = new FormGroup({
    password: new FormControl("")
  });
  private email: string = "";

  constructor(
    private dialogRef: MatDialogRef<CredentialsModalComponent>,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe((user: any) => this.email = user.email);
  }

  ngOnInit(): void {
  }

  send(): void {
    const { password } = this.credentials.value;

    this.authService.changeEmail(this.email, password).subscribe(
      res => this.successReq(res),
      err => this.failureReq(err.error)
    );
  }

  private successReq(data: any): void {
    this.dialogRef.close(data);
  }

  private failureReq(error: any) {
    console.log(error);
  }

  close(): void {
    this.dialogRef.close();
  }
}
