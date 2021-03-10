// Imports modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

// Imports components.
import { NavbarAppComponent } from "../components/navbar-app/navbar-app.component";
import { UserPresentationComponent } from '../components/user-presentation/user-presentation.component';
import { MyProfileSectionComponent } from '../components/my-profile-section/my-profile-section.component';
import { BadgesSectionComponent } from '../components/badges-section/badges-section.component';
import { GroupsSectionComponent } from '../components/groups-section/groups-section.component';
import { EventsSectionComponent } from '../components/events-section/events-section.component';

// Imports material
import { AngularMaterial } from "../material/material";
import { ProfileSectionsComponent } from '../components/profile-sections/profile-sections.component';
import { UserStickerComponent } from '../components/user-sticker/user-sticker.component';

@NgModule({
  declarations: [
    NavbarAppComponent,
    UserPresentationComponent,
    MyProfileSectionComponent,
    ProfileSectionsComponent,
    UserStickerComponent,
    BadgesSectionComponent,
    GroupsSectionComponent,
    EventsSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterial,
    ReactiveFormsModule
  ],
  exports: [
    AngularMaterial,
    ReactiveFormsModule,

    // Compoennts
    NavbarAppComponent,
    UserPresentationComponent,
    MyProfileSectionComponent,
    ProfileSectionsComponent,
    UserStickerComponent,
    BadgesSectionComponent,
    GroupsSectionComponent,
    EventsSectionComponent
  ]
})
export class AppSharedModule {}
