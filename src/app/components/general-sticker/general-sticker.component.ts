// Imports modules.
import { Component, Input } from '@angular/core';

// Imports interfaces.
import { GeneralSticker } from './interfaces/generaSticker.interfaces';

@Component({
  selector: 'app-general-sticker',
  templateUrl: './general-sticker.component.html',
  styleUrls: ['./general-sticker.component.css']
})
export class GeneralStickerComponent {
  @Input() sticker: GeneralSticker;
}
