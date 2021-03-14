// Imports modules.
import { IvyCarouselModule } from "angular-responsive-carousel";
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
import { UserFieldsFormComponent } from '../components/user-fields-form/user-fields-form.component';
import { NotificationComponent } from '../components/notification/notification.component';
import { DangerZoneComponent } from '../components/danger-zone/danger-zone.component';
import { ModalFileUploadComponent } from '../components/modal-file-upload/modal-file-upload.component';
import { CredentialsModalComponent } from '../components/credentials-modal/credentials-modal.component';
import { WelcomeBannerComponent } from '../components/welcome-banner/welcome-banner.component';

@NgModule({
  declarations: [
    NavbarAppComponent,
    UserPresentationComponent,
    MyProfileSectionComponent,
    ProfileSectionsComponent,
    WelcomeBannerComponent,
    UserStickerComponent,
    NotificationComponent,
    CredentialsModalComponent,
    DangerZoneComponent,
    ModalFileUploadComponent,
    UserFieldsFormComponent,
    BadgesSectionComponent,
    GroupsSectionComponent,
    EventsSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterial,
    ReactiveFormsModule,
    IvyCarouselModule
  ],
  exports: [
    AngularMaterial,
    ReactiveFormsModule,
    IvyCarouselModule,

    // Compoennts
    NavbarAppComponent,
    UserPresentationComponent,
    MyProfileSectionComponent,
    ProfileSectionsComponent,
    UserFieldsFormComponent,
    CredentialsModalComponent,
    WelcomeBannerComponent,
    NotificationComponent,
    DangerZoneComponent,
    ModalFileUploadComponent,
    UserStickerComponent,
    BadgesSectionComponent,
    GroupsSectionComponent,
    EventsSectionComponent
  ]
})
export class AppSharedModule {}
