// Imports modules.
import { Component, Input } from '@angular/core';

// Imports interfaces.
import { Badge } from 'src/app/services/badge/interfaces/badge.interfaces';

@Component({
  selector: 'app-badge-card',
  templateUrl: './badge-card.component.html',
  styleUrls: ['./badge-card.component.css']
})
export class BadgeCardComponent {
  @Input() badge: Badge;
}
