// Imports modules.
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from 'src/app/services/auth/auth.service';

// Imports services.

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
      console.log,
      console.error
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
