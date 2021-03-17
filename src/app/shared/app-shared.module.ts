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
import { ProfileSectionsComponent } from '../components/profile-sections/profile-sections.component';
import { UserStickerComponent } from '../components/user-sticker/user-sticker.component';
import { UserFieldsFormComponent } from '../components/user-fields-form/user-fields-form.component';
import { NotificationComponent } from '../components/notification/notification.component';
import { DangerZoneComponent } from '../components/danger-zone/danger-zone.component';
import { ModalFileUploadComponent } from '../components/modal-file-upload/modal-file-upload.component';
import { CredentialsModalComponent } from '../components/credentials-modal/credentials-modal.component';
import { WelcomeBannerComponent } from '../components/welcome-banner/welcome-banner.component';
import { CarouselCreatorsContentComponent } from "../components/carousel-creators-content/carousel-creators-content.component";
import { CarouselSponsorsComponent } from "../components/carousel-sponsors/carousel-sponsors.component";
import { CounterComponent } from "../components/counter/counter.component";
import { WorkshopSectionComponent } from "../components/workshop-section/workshop-section.component";
import { WorkshopStickerComponent } from "../components/workshop-sticker/workshop-sticker.component";
import { WorkshopCardComponent } from "../components/workshop-card/workshop-card.component";
import { CardContentCreatorComponent } from "../components/card-content-creator/card-content-creator.component";
import { CommunityStickerComponent } from "../components/community-sticker/community-sticker.component";
import { CommunityCardComponent } from "../components/community-card/community-card.component";
import { CommunitiesSectionComponent } from "../components/communities-section/communities-section.component";
import { BadgeCardComponent } from "../components/badge-card/badge-card.component";
import { RecentActivitiesSectionComponent } from "../components/recent-activities-section/recent-activities-section.component";
import { DetailsUserSectionComponent } from "../components/details-user-section/details-user-section.component";
import { GeneralStickerComponent } from "../components/general-sticker/general-sticker.component";
import { GeneralSectionComponent } from "../components/general-section/general-section.component";

// Imports material
import { AngularMaterial } from "../material/material";

@NgModule({
  declarations: [
    CarouselCreatorsContentComponent,
    RecentActivitiesSectionComponent,
    DetailsUserSectionComponent,
    CommunitiesSectionComponent,
    CardContentCreatorComponent,
    UserPresentationComponent,
    MyProfileSectionComponent,
    CredentialsModalComponent,
    CarouselSponsorsComponent,
    CommunityStickerComponent,
    WorkshopStickerComponent,
    WorkshopSectionComponent,
    ProfileSectionsComponent,
    ModalFileUploadComponent,
    GeneralSectionComponent,
    GeneralStickerComponent,
    UserFieldsFormComponent,
    WelcomeBannerComponent,
    BadgesSectionComponent,
    EventsSectionComponent,
    GroupsSectionComponent,
    CommunityCardComponent,
    WorkshopCardComponent,
    NotificationComponent,
    UserStickerComponent,
    DangerZoneComponent,
    BadgeCardComponent,
    NavbarAppComponent,
    CounterComponent
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
    CarouselCreatorsContentComponent,
    RecentActivitiesSectionComponent,
    DetailsUserSectionComponent,
    CommunitiesSectionComponent,
    CardContentCreatorComponent,
    UserPresentationComponent,
    MyProfileSectionComponent,
    CredentialsModalComponent,
    CommunityStickerComponent,
    CarouselSponsorsComponent,
    ProfileSectionsComponent,
    WorkshopSectionComponent,
    WorkshopStickerComponent,
    ModalFileUploadComponent,
    UserFieldsFormComponent,
    GeneralStickerComponent,
    GeneralSectionComponent,
    CommunityCardComponent,
    WelcomeBannerComponent,
    BadgesSectionComponent,
    EventsSectionComponent,
    GroupsSectionComponent,
    WorkshopCardComponent,
    NotificationComponent,
    UserStickerComponent,
    DangerZoneComponent,
    BadgeCardComponent,
    NavbarAppComponent,
    CounterComponent
  ]
})
export class AppSharedModule {}
