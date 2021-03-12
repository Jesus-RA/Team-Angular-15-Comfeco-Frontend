// Imports modules.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-file-upload',
  templateUrl: './modal-file-upload.component.html',
  styleUrls: ['./modal-file-upload.component.css']
})
export class ModalFileUploadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  upload(): boolean {
    const form = document.getElementById("fileForm") as HTMLFormElement | null;
    if (!form) return false;

    const formdata: FormData = new FormData(form);

    return false;
  }
}
