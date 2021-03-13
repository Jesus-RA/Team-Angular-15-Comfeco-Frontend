// Imports modules.
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

// Imports services.
import { UploadService } from "src/app/services/upload/upload.service";

// Imports components.
import { NotificationComponent } from "src/app/components/notification/notification.component";

@Component({
  selector: 'app-modal-file-upload',
  templateUrl: './modal-file-upload.component.html',
  styleUrls: ['./modal-file-upload.component.css']
})
export class ModalFileUploadComponent {
  constructor(
    private uploadService: UploadService,
    @Inject(MAT_DIALOG_DATA) private data: { route: string },
    public dialogRef: MatDialogRef<ModalFileUploadComponent>,
    private snackbar: MatSnackBar
  ) {}

  previewImage(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    if (!input || !input.files.length) return;

    const file: File = input.files.item(0);

    const reader: FileReader = new FileReader;

    reader.addEventListener("loadend", () => {
      const image = document.getElementById("image-preview") as HTMLImageElement | null;
      if (image) {
        image.src = reader.result as string;
      }
    });

    reader.readAsDataURL(file);
  }

  upload(): boolean {
    const form = document.getElementById("fileForm") as HTMLFormElement | null;
    if (!form) return false;

    const formdata: FormData = new FormData(form);

    this.uploadService.upload(this.data.route, formdata).subscribe(
      res => this.successReqChangeUpload(res),
      err => console.error(err)
    );

    return false;
  }

  private successReqChangeUpload(data: any): void {
    this.dialogRef.close(data.picture.url);
    this.showMessage("edit", data.message, "warning");
  }

  private showMessage(icon: string, message: string, status: string): void {
    this.snackbar.openFromComponent(NotificationComponent, {
      duration: 3000,
      panelClass: [`bg-${ status }`],
      data: { icon, message }
    });
  }
}
