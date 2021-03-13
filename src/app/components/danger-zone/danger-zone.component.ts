// Imports modules.
import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

// Imports helpers.
import { LocalStorage } from "src/app/helpers/LocalStorage";

// Imports services.
import { AuthService } from "src/app/services/auth/auth.service";

// Imports components.
import { ModalMessageComponent } from "src/app/components/modal-message/modal-message.component";

@Component({
  selector: 'app-danger-zone',
  templateUrl: './danger-zone.component.html',
  styleUrls: ['./danger-zone.component.css']
})
export class DangerZoneComponent {
  private user: any = {};

  constructor(
    private storage: LocalStorage<{}>,
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.watchStateUser();
  }

  private watchStateUser(): void {
    this.authService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  changeEmail(): void {
    if (confirm("Modificaras el email de tu cuenta ¿Deseas continuar?")) {
      this.openDialog("/assets/icons/mailbox.svg", "Se te ha enviado un link a tu correo electronico para que puedas modificar tu cuenta.");
    }
  }

  forgotPassword(): void {
    if (confirm("Con esta accion modificaras tu contraseña, ¿Estas seguro?")) {
      this.authService.forgotPassword(this.user.email).subscribe(
        res => this.successRequestForgotPassword(res),
        err => console.error(err)
      );
    }
  }

  private successRequestForgotPassword(data: any): void {
    this.storage.clear();

    this.openDialog("/assets/icons/shield.svg", data.message);
  }

  private openDialog(image: string, text: string): void {
    this.dialog.open(ModalMessageComponent, {
      width: "500px",
      disableClose: true,
      data: { image, text }
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.router.navigate(["/auth/login"]);
    });
  }
}
