// Imports modules.
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

// Imports interfaces.
import { User } from 'src/app/services/user/interfaces/user.interfaces';
import { Badge } from 'src/app/services/badge/interfaces/badge.interfaces';
import { Group } from 'src/app/services/group/interfaces/group.interfaces';
import { DetailsUser } from '../details-user-section/interfaces/details-user.interfaces';
import { StickerSection } from '../general-sticker-section/interfaces/stickerSection.interfaces';

// Imports services.
import { BadgeService } from 'src/app/services/badge/badge.service';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-profile-sections',
  templateUrl: './profile-sections.component.html',
  styleUrls: ['./profile-sections.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileSectionsComponent implements OnInit {
  detailsUser: DetailsUser = {
    header: { icon: "info", title: "Detalles" },
    items: []
  };

  myInsigniaSection: StickerSection = {
    header: { icon: "military_tech", title: "Mis insignias" },
    stickers: []
  };

  myGroupSection: StickerSection = {
    header: { icon: "supervisor_account", title: "Mis grupos" },
    stickers: []
  };

  badges: Badge[] = [];

  constructor(
    private badgeService: BadgeService,
    private groupService: GroupService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.setDetailsUser(user);

      this.badgeService.getByUserId(user._id).subscribe(({ badges }) => {
        this.setMyBadgeSection(badges, user.nickname);
      });

      this.groupService.listByUser(user._id).subscribe(({ groups }) => {
        this.setMySectionGroups(groups, user.nickname);
      });
    });

    this.badgeService.list().subscribe(res => this.badges = res.badges);
  }

  private setDetailsUser({ gender, country, birthday }: User): void {
    Object.entries({ gender, country, birthday }).forEach(value => {
      if (!!value[1]) this.detailsUser.items = [
        { icon: "male", text: gender },
        { icon: "location_on", text: country },
        { icon: "calendar_today", text: birthday?.toString() }
      ];
    });
  }

  private setMyBadgeSection(badges: Badge[], nickname: string): void {
    badges.forEach(badge => {
      this.myInsigniaSection.stickers.push({
        avatar: badge.logo,
        title: `¡Felicidades ${ nickname }! Has obtenido la insignia ${ badge.title }`,
        subtitle: badge.challenge
      });
    });
  }

  private setMySectionGroups(groups: Group[], nickname: string): void {
    groups.forEach(group => {
      this.myGroupSection.stickers.push({
        avatar: group.banner,
        title: `${ nickname }, Ahora formas parte del grupo ${ group.name }`,
        subtitle: group.description
      });
    });
  }
}
