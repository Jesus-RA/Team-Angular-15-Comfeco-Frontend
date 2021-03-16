// Imports modules.
import { Component, Input } from '@angular/core';

// Imports interfaces.
import { Community } from 'src/app/services/communities/interfaces/community.interfaces';

@Component({
  selector: 'app-community-sticker',
  templateUrl: './community-sticker.component.html',
  styleUrls: ['./community-sticker.component.css']
})
export class CommunityStickerComponent {
  @Input() community: Community;
}
