// Imports modules.
import { Component } from '@angular/core';

// Imports services.
import { UploadService } from "src/app/services/upload/upload.service";

@Component({
  selector: 'app-modal-file-upload',
  templateUrl: './modal-file-upload.component.html',
  styleUrls: ['./modal-file-upload.component.css']
})
export class ModalFileUploadComponent {
  constructor(
    private uploadService: UploadService
  ) {}

  upload(): boolean {
    const form = document.getElementById("fileForm") as HTMLFormElement | null;
    if (!form) return false;

    const formdata: FormData = new FormData(form);

    return false;
  }
}
