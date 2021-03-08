// Imports modules.
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-modal-confirm-email',
  templateUrl: './modal-confirm-email.component.html',
  styleUrls: ['./modal-confirm-email.component.css']
})
export class ModalConfirmEmailComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalConfirmEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  close(): void {
    this.dialogRef.close();
  }

}
