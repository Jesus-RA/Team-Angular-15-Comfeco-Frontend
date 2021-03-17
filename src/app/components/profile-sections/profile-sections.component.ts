// Imports modules.
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

// Imports services.
import { BadgeService } from 'src/app/services/badge/badge.service';
import { Badge } from 'src/app/services/badge/interfaces/badge.interfaces';
import { DetailsUser } from '../details-user-section/interfaces/details-user.interfaces';

@Component({
  selector: 'app-profile-sections',
  templateUrl: './profile-sections.component.html',
  styleUrls: ['./profile-sections.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileSectionsComponent implements OnInit {
  myBadges: Badge[] = [];
  badges: Badge[] = [];
  detailsUser: DetailsUser = {
    header: { icon: "info", title: "Detalles" },
    items: []
  };

  constructor(
    private badgeService: BadgeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.detailsUser.items = [
        { icon: "male", text: user.gender },
        { icon: "location_on", text: user.country },
        { icon: "calendar_today", text: user.birthday?.toString() }
      ];

      this.badgeService.getByUserId(user._id).subscribe(res => {
        this.myBadges = res.badges;
      });
    });

    this.badgeService.list().subscribe(res => this.badges = res.badges);
  }
}
