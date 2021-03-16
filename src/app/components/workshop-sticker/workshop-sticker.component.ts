// Imports modules.
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workshop-sticker',
  templateUrl: './workshop-sticker.component.html',
  styleUrls: ['./workshop-sticker.component.css']
})
export class WorkshopStickerComponent {
  @Input() workshop: any;
}
