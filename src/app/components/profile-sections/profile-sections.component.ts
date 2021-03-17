// Imports modules.
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Imports services.
import { BadgeService } from 'src/app/services/badge/badge.service';
import { Badge } from 'src/app/services/badge/interfaces/badge.interfaces';

@Component({
  selector: 'app-profile-sections',
  templateUrl: './profile-sections.component.html',
  styleUrls: ['./profile-sections.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileSectionsComponent implements OnInit {
  badges: Badge[] = [];

  constructor(
    private badgeService: BadgeService
  ) {}

  ngOnInit(): void {
    this.badgeService.list().subscribe(res => this.badges = res.badges);
  }
}
