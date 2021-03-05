import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupsModule } from './submodules/groups/groups.module';
import { EventsModule } from './submodules/events/events.module';
import { BadgesModule } from './submodules/badges/badges.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FontAwesomeModule,
    BadgesModule,
    GroupsModule,
    EventsModule
  ]
})
export class ProfileModule { }
